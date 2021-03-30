// const cript = require('bcrypt');
// const storage = require('localtoken');
// const auth = require('../middleware/auth');

const mongoose = require('mongoose');
require('../models/users');
const modelo = mongoose.model('User');



exports.getClient = async (req, res, next) => {
  try {
    return res.json({ 'teste': 'treste' });
  } catch (err) {
    next(err);
  }
}



exports.postClient = async (req, res, next) => {
  try {
    await new modelo(req.body).save();
    return res.json(req.body)
  }
  catch (err) {
    next(err);
  }
}