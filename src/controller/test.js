const mongoose = require('mongoose')
require('../models/investments');
const modelo = mongoose.model('Investments');

exports.getTest = async (req, res, next) => {
      try {
        const response = await modelo.find({}).populate('consortium').limit(1);
        return res.json({response, status: 200});
    
      } catch (err) {
        next(err);
      }
}