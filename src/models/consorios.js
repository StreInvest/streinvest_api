const mongoose = require('mongoose');

const consortia = new mongoose.Schema({
  consortium: {
    type: String,
    required: true,
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
  investments: [
    {
      type: Schema.Types.ObjectId, ref: 'Investment'
    }
  ]
});

module.exports = mongoose.model('Consortium', consortia);