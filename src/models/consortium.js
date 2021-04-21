const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const consortium = new Schema({
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
  }
});

module.exports = mongoose.model('Consortiums', consortium);