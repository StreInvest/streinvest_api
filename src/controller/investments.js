const mongoose = require('mongoose');

require('../models/users');
const modeloUser = mongoose.model('User');

require('../models/investments');
const modeloInvest = mongoose.model('Investments');


require('../models/consortium');
const modeloConsortium = mongoose.model('Consortiums');

const resource = require('../resources/index')

// // ***************** Investimento *****************

exports.postInvest = async (req, res, next) => {
  resource.Investment.NewInvestimentResource(res, req, next, modeloInvest, modeloUser)
}

exports.getInvest = async (req, res, next) => {
  resource.Investment.IndexInvestimentResource(res, req, next, modeloInvest, modeloUser, modeloConsortium)
}

exports.getInvestEspecif = async (req, res, next) => {
  resource.Investment.ShowInvestimentResource(res, req, next, modeloInvest, modeloUser)
}

exports.putInvest = async (req, res, next) => {
  resource.Investment.EditInvestimentResource(res, req, next, modeloInvest, modeloUser)
}

exports.deleteInvest = async (req, res, next) => {
  resource.Investment.DeleteInvestimentResource(res, req, next, modeloInvest, modeloUser)
}