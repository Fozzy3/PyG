/******************************* Diversas rutas y coneccion al Url de Firebase *******************************/

const router = require('express').Router();

const admin = require('firebase-admin')
const serviceAccount = require('../../pyqconsultores-bd4bc-firebase-adminsdk-zy58m-376ff36e28.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.EMAIL_DATA
})

const db = admin.database();


router.get('/', (req, res) => {
    res.render('index');
});

router.get('/servicios', (req, res) => {
    res.render('pages/servicios');
});

router.get('/calendario', (req, res) => {
    res.render('pages/calendario');
});

router.get('/noticias', (req, res) => {
    res.render('pages/noticias');
});

// Pagina de Contacto

router.get('/contacto', (req, res) => {
    res.render('pages/contacto');
});

router.get('/contacto/agradecimiento-contacto', (req, res) => {
    res.render('contacto/agradecimiento');
});

router.get('/contacto/proteccion-datos', (req, res) => {
    res.render('contacto/proteccion-datos')
})

router.post('/formulario', async (req, res) => {
    const {
        name,
        email,
        phone,
        message,
        company
    } = req.body;
    const errors = [];

    if (!name || !email || !phone || !company) {
        errors.push({
            text: 'Por favor complete todos los datos para continuar'
        });
    }
    if (errors.length > 0) {
        res.render('pages/contacto', {
            errors
        });
    } else {
        const newContanct = {
            nombre: req.body.name,
            email: req.body.email,
            telefono: req.body.phone,
            mensaje: req.body.message,
            empresa: req.body.company
        };

        db.ref('posibles-clientes').push(newContanct);
        res.redirect('/contacto/agradecimiento-contacto');
    }
})

module.exports = router;