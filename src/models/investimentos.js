const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const investimentos = new Schema({
  investment_name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  status: {
    type: String,
    required: true,
    enum: ['Open', 'Close']
  },
  risk: {
    type: String,
    required: true,
    enum:
      ['Severe ', ' Moderate ', ' Safe ']
  },
  category: {
    type: String,
    required: true
  },
  profitability: {
      type: Schema.Types.Object,
      ref: 'Rentabilidade',
      require: true
    }
});

module.exports = mongoose.model('Investimento', investimentos);