'use strict'
const mongoose = require('mongoose');
const keys = require('../../config/keys');

mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

module.exports.connect = () => {
  mongoose.connect(keys.database.connection, err => {
    if (err) {
      console.log('- MongoDB does not run'.red);
    } else {
      console.log('- mongoDB is run'.green);
    }
    console.log('===================================')
  }, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    UseCreateIndexes: true
  });
}