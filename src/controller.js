const dbUsers = require('./database/db_users')
const dbProd = require('./database/db_product')

exports.getClient = async (req, res, next) => {
  try {
    return res.json(dbUsers);
  } catch (err) {
    next(err);
  }
}

exports.getConsortium = async (req, res, next) => {
  try {
      return res.json(dbProd);
  } catch (err) {
    next(err);
  }
}