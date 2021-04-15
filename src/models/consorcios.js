const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const consorcios = new Schema({
  consortium_name: {
    type: String,
    required: true,
    unique: true,
    trim: true
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
  },
  investimentos: {
      type: Schema.Types.Array,
      ref: 'Investimento',
      require: true
    }
});

module.exports = mongoose.model('Consorcio', consorcios);