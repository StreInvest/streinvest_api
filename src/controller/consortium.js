// *********** Models *************

const mongoose = require('mongoose');
require('../models/users');
const modeloUser = mongoose.model('User');

require('../models/consortium');
const modelo = mongoose.model('Consortiums');

require('../models/investments');
const modeloInvest = mongoose.model('Investments');

// **************** Consorcio  *****************

exports.postConsortium = async (req, res, next) => {
  try {
    const {token} = req.params
    const user = await modeloUser.findOne({token, master: true})
    if(user){
      const response = await new modelo(req.body).save();
      return res.json({response, "status": 200})
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

exports.getConsortium = async (req, res, next) => {
    try {
      const {token} = req.params
      const { consortium } = req.query
      const user = await modeloUser.findOne({token: token})
      if (user){
        if(consortium != undefined  || consortium !=  null){
          const response = await modelo.find({ consortium_name:  consortium });
          return res.json({response, status: 200});
        }
        else{
          const response = await modelo.find({});
          return res.json({response, status: 200});
        }
      }
      else {
        return res.json({response: "token invalid", status: 401})
      }
      
    } catch (err) {
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

// ***************** Investimento *****************

exports.postInvest = async (req, res, next) => {
  try {
    const {token} = req.params
    const user = await modeloUser.findOne({token, master: true})
    if(user){
      const response = await new modeloInvest(req.body).save();
      return res.json({response, "status": 200})
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


exports.getInvest = async (req, res, next) => {
  try {
    const {token} = req.params
    const { consortium, category } = req.query
    const user = await modeloUser.findOne({token: token})
    if(user){
      if(consortium != undefined || category != undefined){
        const consu = await modelo.findOne({consortium_name: consortium})
        if(consu){
          const response = await modeloInvest.find({consortium:  consu._id}).populate('consortium');
          return res.json({response, status: 200});
        }else{
          const response = await modeloInvest.find({category:  category}).populate('consortium');
          return res.json({response, status: 200});
        }
      }
      else{
        const response = await modeloInvest.find({}).populate('consortium');
        return res.json({response, status: 200});
      }

    
    }
    else {
      return res.json({ response: "you don't have access", status: 401})
    }
    
  } catch (err) {
    next(err);
  }
}

exports.putInvest = async (req, res, next) => {
  try {
    const {token, id} = req.params
    const dados = req.body
    var now = new Date()
    dados['updated_at'] = now
    
    const user = await modeloUser.findOne({token, master: true})
    if(user){
      const resp = await modeloInvest.findByIdAndUpdate(id, dados);
      if(resp){
        const response = await modeloInvest.findById(id)
        return res.json({response, "status": 201})
      }
      else{
        return res.json({
          response: 
          "it was not possible to update, check the data is being sent correctly", 
          status: 204
        })
      }
    }
    else {
      return res.json({ response: "you don't have access", status: 403})
    }
  }
  catch (err) {
    console.log(err)
    next(err);
  }
}

exports.deleteInvest = async (req, res, next) => {
  try {
    const { id, token } = req.params

    const user = await modeloUser.findOne({token, master: true})

    if(user){
      const resp = await modeloInvest.findByIdAndDelete(id);
      if(resp){
        return res.json({response: "deleted with success", status: 200})
      }else{
        return res.json({response: "User already deleted", status: 404})
      }
    }else{
      return res.json({ response: "you don't have access", status: 403})
    } 

  }
  catch (err) {
    next(err);
  }
}
