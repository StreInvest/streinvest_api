const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const investimentos = new Schema({
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
  profitability: {
      type: Schema.Types.Object,
      ref: 'Rentabilidade',
      require: false
    }
});

module.exports = mongoose.model('Investimento', investimentos);