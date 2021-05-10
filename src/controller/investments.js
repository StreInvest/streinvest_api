// *********** Models *************

const mongoose = require('mongoose');
require('../models/users');
const modeloUser = mongoose.model('User');

require('../models/consortium');
const modelo = mongoose.model('Consortiums');

require('../models/investments');
const modeloInvest = mongoose.model('Investments');


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
      const { consortium, category, limit = 10, page = 1, order = 1 } = req.query
      var orderNum = order == 'desc' ? -1 : 1
      const user = await modeloUser.findOne({token: token})
      if(user){
        if(consortium != undefined || category != undefined){
          const consu = await modelo.findOne({consortium_name: consortium});
          if(consu){
            const response = await modeloInvest.find({consortium:  consu._id})
                                  .populate('consortium')
                                  .sort({ created_at: orderNum })
                                  .limit(limit * 1)
                                  .skip((page - 1)*limit);
            return res.json({
              response, 
              paginate: { limit, page, totalCurrentPage: response.length+"" }, 
              status: 200});
          }else{
            const response = await modeloInvest.find({category:  category})
                                    .populate('consortium')
                                    .sort({ created_at: orderNum })
                                    .limit(limit * 1)
                                    .skip((page - 1)*limit);
            return res.json({
              response, 
              paginate: { limit, page, totalCurrentPage: response.length+"" }, 
              status: 200});
          }
        }
        else{
          const response = await modeloInvest.find({})
                            .populate('consortium')
                            .sort({ created_at: orderNum })
                            .limit(limit * 1)
                            .skip((page - 1)*limit);
          return res.json({
            response, 
            paginate: { limit, page, totalCurrentPage: response.length+"" }, 
            status: 200});
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