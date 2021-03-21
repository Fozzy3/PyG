const myFunction = require('../public/script');
const nodemailer = require('nodemailer');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/servicios', (req, res) =>{
    res.render('pages/servicios');
});

router.get('/actualidad', (req, res) =>{
    res.render('pages/actualidad');
});

router.get('/contacto', (req, res) =>{
    res.render('pages/contacto');
});

//Enviar Correo Electronico

router.post('/send-email', async (req, res) =>{
    const {name, email, phone, message} = req.body;

    contentHtml = `
    
    <h1>User information</h1>
    <ul>
        <li>Username: ${name}</li>
        <li>Email: ${email}</li>
        <li>Phono: ${phone}</li>
        <p>${message}</p>
    </ul>

    `;

    const transporter = nodemailer.createTransport({
        host: ' ',
        port: 26,
        secure: false,
        auth: {
            user: ' ', //correo
            pass: ' ' //Contraseña
        }
    });

    const info = await transporter.sendMail({
        from: '',
        to: '', //correo al que llegara
        subject: 'Website contact from',
        text: 'Hello world'
    })

    console.log('Message sent', info.messageId); 
    res.send('recibido')
})

module.exports = router;