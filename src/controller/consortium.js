const mongoose = require('mongoose');
require('../models/users');
const modeloUser = mongoose.model('User');

require('../models/consorcios');
const modelo = mongoose.model('Consorcio');



exports.getConsortium = async (req, res, next) => {
  try {
    const {token} = req.params
    const user = await modeloUser.findOne({token: token})
    if (user){
      const response = await modelo.find({});
      return res.json(response);
    }
    else {
      return res.json({response: "token invalid"})
    }
    
  } catch (err) {
    next(err);
  }
}



exports.postConsortium = async (req, res, next) => {
  try {
    const {token} = req.params
    const user = await modeloUser.findOne({token, master: true})
    if(user){
      const response = await new modelo(req.body).save();
      return res.json({response, "status": 200})
    }
    else {
      return res.json({ response: "you don't have access"})
    }
  }
  catch (err) {
    console.log(err)
    next(err);
  }
}

exports.putConsortium = async (req, res, next) => {
  try {
    const {token, id} = req.params
    const dados = req.body
    var now = new Date()
    dados['updated_at'] = now
    
    const user = await modeloUser.findOne({token, master: true})
    if(user){
      const resp = await modelo.findByIdAndUpdate(id, dados);
      if(resp){
        const response = await modelo.findById(id)
        return res.json({response, "status": 201})
      }
      else{
        return res.json({
          response: 
          "it was not possible to update, check the data is being sent correctly", 
          status: 201
        })
      }
    }
    else {
      return res.json({ response: "you don't have access", status: 401})
    }
  }
  catch (err) {
    console.log(err)
    next(err);
  }
}

exports.deleteConsorcio = async (req, res, next) => {
  try {
    const { id, token } = req.params

    const user = await modeloUser.findOne({token, master: true})

    if(user){
      const resp = await modelo.findByIdAndDelete(id);
      if(resp){
        return res.json({response: "deleted with success", status: 200})
      }else{
        return res.json({response: "User already deleted", status: 404})
      }
    }else{
      return res.json({ response: "you don't have access", status: 401})
    }
  }
  catch (err) {
    next(err);
  }
}
