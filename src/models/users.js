const mongoose = require('mongoose');

const users = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  master: {
    type: Boolean,
    required: true,
    default: false
  },
  token: {
    type: String,
    required: true,
    default: 'test_123456'
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