var express = require('express');
var router = express.Router();
var hoyModel = require('./../models/hoyModel');
var cloudinary = require('cloudinary').v2;

router.get('/hoy', async function(req,res,next) {
    let hoy = await hoyModel.getHoy();

    hoy = hoy.map(hoy =>{
        if (hoy.img_id) {
            const imagen = cloudinary.url(hoy.img_id,{
                width: 960,
                height: 200,
                crop: 'fill'
            });
            return {
                ...hoy,
                imagen
            }
        }else {
            return {
                ...hoy,
                imagen:''
            }
        }
    });
    
    res.json(hoy);
});

module.exports = router;