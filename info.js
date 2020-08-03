const express = require('express');
const router = express.Router();
const h = require('./header.js');

router.get('/', (req, res) => {
    res.send(h.headerCenter2('We have no bad intentions'));
});

router.get('/about', (req, res) => {
    res.send(h.headerCenter2('Don\'t worry. We\'re just going to self-destruction'));
});

module.exports = router;