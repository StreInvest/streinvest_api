// *********** Models *************

const mongoose = require('mongoose');
require('../models/users');
const modeloUser = mongoose.model('User');

require('../models/consortium');
const modelo = mongoose.model('Consortiums');




exports.postConsortium = async (req, res, next) => {
  try {
    const {token} = req.params
    const user = await modeloUser.findOne({token, master: true})
    if(user){
      const response = await new modelo(req.body).save();
      return res.status(201).json({response, "status": 201})
    }
    else {
      return res.status(401).json({ response: "you don't have access", status: 401})
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
      const { consortium, limit = 10, page = 1, order = 'asc' } = req.query
      var orderNum = order == 'desc' ? -1 : 1
      const user = await modeloUser.findOne({token: token})
      if (user){
        if(consortium != undefined  || consortium !=  null){
          const response = await modelo.find({ consortium_name:  consortium })
                                  .sort({ created_at: orderNum })
                                  .limit(limit * 1).skip((page -1)*limit);
          return res.status(200).json({
            response,
            paginate: { 
              limit, 
              page, 
              totalCurrentPage: response.length+"" 
            },
            status: 200});
        }
        else{
          const response = await modelo.find({}).sort({ created_at: orderNum }).limit(limit * 1).skip((page -1)*limit);
          return res.status(200).json({
            response,  
            paginate: { 
              limit, 
              page, 
              totalCurrentPage: response.length+"" 
            }, 
            status: 200});
        }
      }
      else {
        return res.status(401).json({response: "token invalid", status: 401})
      }
      
    } catch (err) {
      next(err);

    }
  }

exports.getConsortiumEspecifico = async (req, res, next) => {
  try {
    const {token, id} = req.params
    const user = await modeloUser.findOne({token: token})
    if (user){
      const response = await modelo.findOne({_id:  id});

      if (response){
        return res.status(200).json({
          response, 
          status: 200
        });
      }
      else{
        return res.status(403).json({response: "unidentified resource, verify that the data is correct", status: 403})
      }
    } 
    else {
      return res.status(401).json({response: "token invalid", status: 401})
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
            return res.status(200).json({response, "status": 200})
          }
          else{
            return res.status(400).json({
              response: 
              "it was not possible to update, check the data is being sent correctly", 
              status: 400
            })
          }
        }
        else {
          return res.status(401).json({ response: "you don't have access", status: 401})
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
          return res.status(204).json({})
        }else{
          return res.status(404).json({response: "User already deleted", status: 404})
        }
      }else{
        return res.status(401).json({ response: "you don't have access", status: 401})
      } 
  
    }
    catch (err) {
      next(err);
    }
  }
