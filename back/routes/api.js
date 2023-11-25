var express = require('express');
var router = express.Router();
var hoyModel = require('./../models/hoyModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

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

router.post('/futuro', async (req,res) => {
    const mail = {
        to: 'lucia.belmonte17.lb@gmail.com',
        subject:'Contacto web',
        html: `${req.body.nombre} se contacto a traves de la web <br> Hizo el siguiente comentario: ${req.body.mensaje}`
    }

   const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
   });

   await transport.sendMail(mail)

   res.status(201).json({
    error:false,
    message: 'Mensaje enviado'
   });

}); /*cierra post/api*/

module.exports = router;