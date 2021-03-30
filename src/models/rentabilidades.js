const mongoose = require('mongoose');

const profitability = new mongoose.Schema({
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

module.exports = mongoose.model('Profitability', profitability);