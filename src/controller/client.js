const mongoose = require('mongoose');
require('../models/users');
const modelo = mongoose.model('User');

const jwt = require('jsonwebtoken')


exports.getClient = async (req, res, next) => {
  try {
    const response = await modelo.find({});
    return res.json(response);
  } catch (err) {
    next(err);
  }
}



exports.postClient = async (req, res, next) => {
  try {
    const dados = req.body
    var token = jwt.sign({user: modelo.email}, 'Abc!23').toString()
    dados["token"] = token.slice(62,105) 
    const response = await new modelo(dados).save();
    return res.json({response, status: 200})

  }
  catch (err) {
    next(err);
  }
}