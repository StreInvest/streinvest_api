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
    const user = await modeloUser.find({token, master: true})
    if(user){
      const resposta = await new modelo(req.body).save();
      return res.json(resposta)
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