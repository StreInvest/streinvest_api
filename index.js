const app = require('./config/initialize');
const keys = require('./config/keys');
const connection = require('./src/middleware/connection');

app.listen(keys.server.port, (err) => {
  connection.connect();
  console.log('===================================')
  if (err) {
    console.log('- Failed to run application.'.red);
  } else {
    console.log('- Application working correctly.'.green);
  }
});
