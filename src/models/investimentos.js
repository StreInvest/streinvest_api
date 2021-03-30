const mongoose = require('mongoose');

const investments = new mongoose.Schema({
  investment_name: {
    type: String,
    required: false,
    trim: true
  },
  status: {
    type: String,
    required: false,
    enum: ['Open', 'Close']
  },
  risk: {
    type: String,
    required: false,
    enum:
      ['Severe ', ' Moderate ', ' Safe ']
  },
  category: {
    type: String,
    required: false
  },
  profitability: [
    {
      type: Schema.Types.ObjectId, ref: 'Profitability'
    }
  ]
});

module.exports = mongoose.model('Investment', investments);