// const cript = require('bcrypt');
// const storage = require('localtoken');
// const auth = require('../middleware/auth');

const mongoose = require('mongoose');
require('../models/consorcios');
const modelo = mongoose.model('Consorcio');



exports.getClient = async (req, res, next) => {
  try {
    const response = await modelo.find({});
    return res.json(response);
  } catch (err) {
    next(err);
  }
}



exports.postProduct = async (req, res, next) => {
  try {
    await new modelo(req.body).save();
    return res.json(req.body)
  }
  catch (err) {
    next(err);
  }
}