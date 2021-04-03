// const cript = require('bcrypt');
// const storage = require('localtoken');
// const auth = require('../middleware/auth');

const mongoose = require('mongoose');
require('../models/users');
const modelo = mongoose.model('User');



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
    const response = await new modelo(req.body).save();
    if(!response){
      return res.json({"error": "erro na requisição"})
    }
    return res.json({response, status: 200})

  }
  catch (err) {
    next(err);
  }
}