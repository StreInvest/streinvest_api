const app = require('./config/initialize');
const keys = require('./config/keys');

app.listen(keys.server.port, (err) => {
  if (err) {
    console.log('==> [-]  falha na aplicação');
  } else {
    console.log('==> [+] aplicação funcionando ');
  }
});