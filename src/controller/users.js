const mongoose = require('mongoose');
require('../models/users');
const modelo = mongoose.model('User');
const jwt = require('jsonwebtoken')

const resource = require('../resources/index')

exports.getClient = async (req, res, next) => {
  resource.User.IndexUserResource(res, next, modelo);
}

exports.getClientEspecificoId = async (req, res, next) => {
  resource.User.ShowUserResource(res, req, next, modelo);
}

exports.postClient = async (req, res, next) => {
  resource.User.NewUserResource(jwt, res, req, next, modelo)
}

exports.putClient = async (req, res, next) => {
  resource.User.EditUserResource(res, req, next, modelo)
}

exports.getClientRecover = async (req, res, next) => {
  resource.User.RecoverTokenUserResource(jwt, res, req, next, modelo)
}


exports.deleteClient = async (req, res, next) => {
  resource.User.DeleteUserResource(res, req, next, modelo)
}
