
/* Uso de handlebars */


const express = require('express');
const path = require('path');
const exphs = require('express-handlebars');
require('dotenv').config();


const app = express();

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
}));
app.set('view engine', '.hbs');

app.use(require('./routes/index'));


app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res) => {
    res.render('./pages/404')
})

app.listen(app.get('port'), () => {
    console.log('server on Port', app.get('port'));
})