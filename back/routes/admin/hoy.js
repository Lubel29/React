var express = require('express');
var router = express.Router();
var hoyModel = require('../../models/hoyModel');



router.get('/', async function (req, res, next) {

  var hoy = await hoyModel.getHoy();

  res.render('admin/hoy', {
    layout:'admin/layout',
    usuario: req.session.nombre,
    persona: req.session.nombre,
    hoy
   });
});


router.get('/agregar',(req,res,next) =>{
  res.render('admin/agregar',{
    layout:'admin/layout'
  })
})

router.post('/agregar', async (req,res,next)=>{
  try{
    
    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != ""){
      await hoyModel.insertHoy(req.body);
      res.redirect('/admin/hoy/')
    } else{
      res.render('admin/agregar',{
        layout: 'admin/layout',
        error:true,
        message: 'Todos los campos son requeridos'
      })
    }
  } catch(error){
    console.log(error)
    res.render('admin/agregar',{
      layout:'admin/layout'
    })
  }
})

module.exports = router;