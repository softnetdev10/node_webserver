const express = require('express');
const app = express();
const hbs = require('hbs');

// DEPENDENCIAS
require('./hbs/helpers.js');

const port = process.env.PORT || 8080;

// MIDDLEWARE
app.use(express.static(__dirname + '/public'));
app.use('/scripts', express.static(__dirname + '/node_modules'));

// EXPRESS HBS ENGINE (HANDLEBARS)
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        titulo: 'PARKCOPE'
    });

});

app.get('/register', (req, res) => {

    res.render('register', {
        titulo: 'PARKCOPE'
    });

});

app.listen(port, () => {
    console.log(`Escuchando en el puerto: ${ port }`);
});