const express = require('express');
const app = express();
const consortium = require('../src/router/consortium');
const client = require('../src/router/client');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api', consortium);
app.use('/client', client)

module.exports = app;