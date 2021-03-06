const express = require('express');
const path = require('path');
const port = 8000;
const app = express();
var expressLayouts = require('express-ejs-layouts');


app.use(expressLayouts);

app.use('/', require('./routes/index.js'))

app.set('view engine', 'ejs');

app.set('views', './views');




app.listen(port, function (err) {
    if (err) {
        console.log('Hi DevC there is an error while creating the express server');
        return;
    }

    console.log('Hola! you have ceated express server successfully');
})