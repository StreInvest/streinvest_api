const express = require('express');
const app = express();
const consortium = require('../src/router/consortium');
const investment = require('../src/router/investments');
const users = require('../src/router/users');
const test = require('../src/router/test');
const cors = require('cors')


app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())

app.use('/consortium', consortium);
app.use('/investment', investment);
app.use('/user', users)
app.use('/test', test)

module.exports = app;