var express = require('express');
var router = express.Router();
var hoyModel = require('../../models/hoyModel');
const util = require('util');
const cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);


router.get('/', async function (req, res, next) {

  var hoy = await hoyModel.getHoy();

  hoy = hoy.map(hoy => {
    if (hoy.img_id) {
      const imagen = cloudinary.image(hoy.img_id, {
        width: 100,
        height: 100,
        crop: 'fill'
      });
      return {
        ...hoy,
        imagen
      }
    } else {
      return {
        ...hoy,
        imagen: ''
      }
    }
  });

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
/*eliminar una novedad*/
router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;

  let hoy = await hoyModel.getHoyById(id);
if (hoy.img_id) {
  await (destroy(hoy.img_id));
}

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

/*modificar una novedad*/
router.post('/modificar', async (req, res, next) => {
  try {

let img_id = req.body.img_original;

let borrar_img_vieja = false;

if (req.body.img_delete === "1") {
  img_id = null;
  borrar_img_vieja= true;
}else {
  if( req.files && Object.keys(req.files). length > 0) {
    imagen= req.files.imagen;
    img_id = (await
      uploader(imagen.tempFilePath)).public_id;
      borrar_img_vieja = true;
  }
}
if (borrar_img_vieja && req.body.img_original){
  await (destroy(req.body.img_original));
}

    let obj = {
      titulo: req.body.titulo,
      Subtitulo: req.body.Subtitulo,
      Cuerpo: req.body.Cuerpo,
      img_id
    }
    console.log(req.body);

    await hoyModel.modificarHoyById(obj, req.body.id);
    res.redirect('/admin/hoy');

  } catch (error) {
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modifico la novedad'
    })
  }
})

module.exports = router;