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

exports.getClientEspecifico = async (req, res, next) => {
  try {
    var {id} = req.params
    const response = await modelo.findById(id);
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

exports.putClientRecover = async (req, res, next) => {
  try {
    const { id } = req.params

    var dados = jwt.sign({user: modelo.email}, 'Abc!23').toString()
    var token = dados.slice(62,105)
    var now = new Date()
    const response = await modelo.findByIdAndUpdate(id, {token: token, updated_at: now});

    if(response){
      const resp = await modelo.findById(id);
      return res.json({resp, status: 201})
    }
  }
  catch (err) {
    next(err);
  }
}

exports.deleteClientDelete = async (req, res, next) => {
  try {
    const { id } = req.params

    await modelo.findByIdAndDelete(id);

    return res.json({response: "deleted with success", status: 200})
  }
  catch (err) {
    next(err);
  }
}