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
  },
  score: {
    type: String,
    required: true,
    trim: true,
    default: "0"
  },
  minimum_value: {
    type: String,
    required: true,
    trim: true,
    default: "0"
  }
  
});

module.exports = mongoose.model('Profitability', profitability);