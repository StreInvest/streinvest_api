const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const investments = new Schema({
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
      ['Severe', 'Moderate', 'Safe']
  },
  category: {
    type: String,
    required: true
  },
  consortium: {
    type: Schema.Types.ObjectId,
    ref: 'Consortiums',
    require: true
  },
  profitability: {
    type: Schema.Types.Object,
    ref: 'profitability',
    require: true
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

module.exports = mongoose.model('Investments', investments);