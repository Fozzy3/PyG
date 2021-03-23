const router = require('express').Router();

const admin = require('firebase-admin')
const serviceAccount = require('../../pyqconsultores-bd4bc-firebase-adminsdk-zy58m-376ff36e28.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://pyqconsultores-bd4bc-default-rtdb.firebaseio.com/'
})

const db = admin.database();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/servicios', (req, res) => {
    res.render('pages/servicios');
});

router.get('/actualidad', (req, res) => {
    res.render('pages/actualidad');
});

router.get('/contacto', (req, res) => {
    res.render('pages/contacto');
});

//Enviar Correo Electronico

router.post('/send-data', async (req, res) => {
    const { name, mail, phone, message } = req.body;
    const errors = [];

    if(!name || !mail || !phone || !message) {
        errors.push({text: 'Por favor complete todos los datos para continuar'});
    }
    if(errors.length > 0){
        res.render('pages/contacto', {
            errors,
            name
        });
    }
    else {

        const newContanct = {
            nombre: req.body.name,
            mail: req.body.mail,
            telefono: req.body.phone,
            mensaje: req.body.message
        };
        await db.ref('posibles-clientes').push(newContanct);
        res.redirect('/');
    }
})

module.exports = router;