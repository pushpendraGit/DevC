const express = require('express');
const port = 8000;
const app = express();

app.listen(port, function (err) {
    if (err) {
        console.log('Hi DevC there is an error while creating the express server');
        return;
    }

    console.log('Hola! you have ceated express server successfully');
})