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

exports.putClient = async (req, res, next) => {
  try {
    const {id} = req.params
    const dados = req.body
    var now = new Date()
    dados['updated_at'] = now
    const resp = await modelo.findByIdAndUpdate(id, dados);

    if(resp){
      var response = await modelo.findById(id);
      return res.json({response, status: 201})
    }
  }
  catch (err) {
    next(err);
  }
}


exports.deleteClient = async (req, res, next) => {
  try {
    const { id } = req.params

    const resp = await modelo.findByIdAndDelete(id);

    if(resp){
      return res.json({response: "Deleted with success", status: 204})
    }else{
      return res.json({response: "User already deleted", status: 404})
    }

  }
  catch (err) {
    next(err);
  }
}