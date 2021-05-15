const crypto = require('crypto')
const mongoose = require('mongoose')
const keys = require('../../config/keys')
require('../models/investments');
require('../models/users');
const modelo = mongoose.model('Investments');
const modeloUser = mongoose.model('User');

exports.getTest = async (req, res, next) => {
      try {
        const { page = 1, limit = 10 } = req.query
        const response = await modelo.find({}).populate('consortium').sort({ created_at: 1 }).limit(limit * 1).skip((page - 1)*limit);

        return res.json({response, status: 200});
    
      } catch (err) {
        next(err);
      }
}

exports.getUsersEspecifico = async (req, res, next) => {
  try {
    const response = await modeloUser.find({});
    const senha = response[0].password
    const descript = crypto.createDecipher(keys.criptoPasswd.alg, keys.criptoPasswd.hash)
    const dabom = descript.update(senha,keys.criptoPasswd.encode_out, keys.criptoPasswd.encode_in)
    return res.json({response: response[0], paswdDescipher: dabom, status: 200});

  } catch (err) {
    next(err);
  }
}