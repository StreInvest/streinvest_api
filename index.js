const app = require('./config/initialize');
const keys = require('./config/keys');
const connection = require('./src/middleware/connection');


app.listen(keys.server.port, (err) => {
  connection.connect();
  if (err) {
    console.log('==> [-]  falha na aplicação');
  } else {
    console.log('==> [+] aplicação funcionando ');
  }
});
