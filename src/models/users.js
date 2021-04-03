const mongoose = require('mongoose');
const crypto = require('crypto')
const jwt = require('jsonwebtoken') 

// function geraToken(length, characters) {
//   var result           = '';
//   // var characters       = `b23cdefBCIJKLDEFGH6TUVWXYZagMNOPQRSjklmnopqrstxyz01uvw45789`;
//   var charactersLength = characters.length;
//   for ( var i = 0; i < length; i++ ) {
//      result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }
//   return result;
// }

const users = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    min: 6,
    max: 20
  },
  email: {
    type: String,
    required: true,
    unique: true,
    min: 10,
    max: 40,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true, 
    set: value => 
      crypto
      .createHash('md5')
      .update(value)
      .digest('hex')
  },
  master: {
    type: Boolean,
    required: true,
    default: false
  },
  token: {
    type: String,
    required: true,
    unique: true,
    default: "test_2234"
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now
  },
  updated_at: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = mongoose.model('User', users);