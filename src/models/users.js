const mongoose = require('mongoose');
const crypto = require('crypto')
const keys = require('../../config/keys')

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
    set: value => 
      crypto
      .createCipher(keys.criptoPasswd.alg, keys.criptoPasswd.hash)
      .update(value, keys.criptoPasswd.encode_in, keys.criptoPasswd.encode_out)
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