var express = require('express');
var router = express.Router();
var hoyModel = require('../../models/hoyModel');
const util = require('util');
const cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);


router.get('/', async function (req, res, next) {

  var hoy = await hoyModel.getHoy();

  res.render('admin/hoy', {
    layout: 'admin/layout',
    usuario: req.session.nombre,
    persona: req.session.nombre,
    hoy
  });
});


router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  })
})

router.post('/agregar', async (req, res, next) => {
  try {

    var img_id = ''; /*al principio está vacia*/
    console.log(req.files.imagen);

    if (req.files && Object.keys(req.files).length > 0) {
      imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }

    if (req.body.titulo != "" && req.body.Subtitulo != "" && req.body.Cuerpo != "") {
      await hoyModel.insertHoy({
        ...req.body, /*titulo,sub,cuerpo*/
        img_id
      });
      res.redirect('/admin/hoy/')
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se cargo la novedad'
    })
  }
})

router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;

  await hoyModel.deleteHoyById(id);
  res.redirect('/admin/hoy');
});

/*para que me traiga una sola ID de novedades para que yo pueda modificar*/

router.get('/modificar/:id', async (req, res, next) => {

  let id = req.params.id;
  console.log(req.params.id);
  let hoy = await hoyModel.getHoyById(id);
  res.render('admin/modificar', {
    layout: 'admin/layout',
    hoy
  });
});

router.post('/modificar', async (req, res, next) => {
  try {
    let obj = {
      titulo: req.body.titulo,
      Subtitulo: req.body.Subtitulo,
      Cuerpo: req.body.Cuerpo
    }
    await hoyModel.modificarHoyById(obj, req.body.id);
    res.redirect('/admin/hoy');
  }
  catch (error) {
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true, message: 'No se modifico la novedad'
    })
  }
})

module.exports = router;