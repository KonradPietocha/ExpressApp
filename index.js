const express = require('express');
const app = express();
const info = require('./info.js');
const h = require('./header.js');

const style = "text-align:center";
const greeting = "Hello Aliens!"

app.get('/', (req, res) => {
    res.send(h.header1(greeting, style));
});

app.use('/info', info);

app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});
