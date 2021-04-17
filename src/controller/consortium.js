const mongoose = require('mongoose');
require('../models/users');
const modeloUser = mongoose.model('User');

require('../models/consorcios');
const modelo = mongoose.model('Consorcio');



exports.getConsortium = async (req, res, next) => {
  try {
    const {token} = req.params
    const { consorcio, categoria } = req.query
    const user = await modeloUser.findOne({token: token})
    if (user){
      if(consorcio != undefined  || consorcio !=  null){
        // const resp = await modelo.find({consortium_name: consorcio});
        const resp = await modelo.find({ consortium_name:  consorcio });
        // 
        return res.json(resp);
      }
      else{
        const response = await modelo.find({});
        return res.json(response);
      }

    
    }
    else {
      return res.json({response: "token invalid"})
    }
    
  } catch (err) {
    next(err);
  }
}


exports.getInvestNameSelect = async (req, res, next) => {
  try {
    const {token} = req.params

    const user = await modeloUser.findOne({token: token})
    if (user){
      const response = await modelo.find({}, {consortium_name: 1, _id: 1});
      return res.json({response, status: 200})
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
      return res.json({ response: "you don't have access", status: 403})
    }
  }
  catch (err) {
    console.log(err)
    next(err);
  }
}

exports.getCategory = async (req, res, next) => {
  try {
    const {token} = req.params
    const { category } = req.query
    const user = await modeloUser.findOne({token})
    if(user){
      const response = await modelo.find({ "investimentos.category": {$eq: category} }, {
        "investimentos.investment_name": 1,
        "investimentos.status": 1,
        "investimentos.risk": 1,
        "investimentos.category": 1,
        "investimentos.profitability": 1,
        "_id": 0
      });
      // const response = await  modelo.aggregate(
      //   [
      //     { $match: {
      //         "investimentos.category": { $eq: category  } } 
      //     }
      //   ]);
      return res.json({response, "status": 200})
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


exports.putConsortium = async (req, res, next) => {
  try {
    const {token, id} = req.params
    const dados = req.body
    const user = await modeloUser.findOne({token, master: true})
    if(user){
      const response = await modelo.findByIdAndUpdate(id, dados);

      const resp = await modelo.findById(id)
      return res.json({resp, "status": 200})
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