// *********** Models *************

const mongoose = require('mongoose');
require('../models/users');
const modeloUser = mongoose.model('User');

require('../models/consortium');
const modelo = mongoose.model('Consortiums');

const resource = require('../resources/index')


exports.postConsortium = async (req, res, next) => {
  resource.Consortium.NewConsortiumResource(res, req, next, modelo, modeloUser)
}

exports.getConsortium = async (req, res, next) => {
  resource.Consortium.IndexConsortiumResource(res, req, next, modelo, modeloUser)
}

exports.getConsortiumEspecifico = async (req, res, next) => {
  resource.Consortium.ShowConsortiumResource(res, req, next, modelo, modeloUser)
}

exports.putConsortium = async (req, res, next) => {
  resource.Consortium.EditConsortiumResource(res, req, next, modelo, modeloUser)
}

exports.deleteConsorcio = async (req, res, next) => {
  resource.Consortium.DeleteConsortiumResource(res, req, next, modelo, modeloUser)
}
