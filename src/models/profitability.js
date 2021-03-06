const mongoose = require('mongoose');

const profitability = new mongoose.Schema({
  day: {
    type: String,
    required: true,
    trim: true,
    default: "0"
  },
  month: {
    type: String,
    required: true,
    trim: true,
    default: "0"
  },
  year: {
    type: String,
    required: true,
    trim: true,
    default: "0"
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