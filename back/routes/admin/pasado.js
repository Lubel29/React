var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('admin/pasado', {
    layout:'admin/layout',
    usuario: req.session.nombre,
    persona: req.session.nombre
   });
});


module.exports = router;