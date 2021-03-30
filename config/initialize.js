const express = require('express');
const app = express();
const product = require('../src/router/product');
const client = require('../src/router/client');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', product);
app.use('/client', client)

module.exports = app;