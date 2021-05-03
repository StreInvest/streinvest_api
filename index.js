const express = require('express');
const app = express();
const rota = require('./src/router');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', rota);

var porta = process.env.PORT || 3000
app.listen( porta, (err) => {
  if (err) {
    console.log('==> [-]  falha na aplicação');
  } else {
    console.log('==> [+] aplicação funcionando ');
  }
});