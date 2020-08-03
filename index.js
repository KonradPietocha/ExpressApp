const express = require('express');
const app = express();
const wiki = require('./wiki.js');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/wiki', wiki);

app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});
