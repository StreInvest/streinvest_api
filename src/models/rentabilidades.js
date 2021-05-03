const mongoose = require('mongoose');

const rentabilidades = new mongoose.Schema({
  day: {
    type: String,
    required: false,
    trim: true
  },
  month: {
    type: String,
    required: false,
    trim: true
  },
  year: {
    type: String,
    required: false,
    trim: true
  }
});

module.exports = mongoose.model('Rentabilidade', rentabilidades);