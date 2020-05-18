const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public')); // Para mostrar una pagina estatica, si se usa este no funciona el app.get

// Express HBS
hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', { // Nos envia la pagina home
        nombre: 'Alejandra'
    });

});

app.get('/about', (req, res) => {
    res.render('about');

})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});