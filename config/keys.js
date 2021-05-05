'use strict'

module.exports = {
  server: {
    port: process.env.PORT || 3000,
  },
  database: {
    connection: 'mongodb+srv://rpg:rpg@cluster0.0ddez.mongodb.net/streinvest_tres?retryWrites=true&w=majority'
  }
}