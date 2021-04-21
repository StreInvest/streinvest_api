const express = require('express');
const app = express();
const consortium = require('../src/router/consortium');
const users = require('../src/router/users');
const test = require('../src/router/test');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api', consortium);
app.use('/users', users)
app.use('/test', test)

module.exports = app;