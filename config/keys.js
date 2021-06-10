'use strict'

module.exports = {
  server: {
    port: process.env.PORT || 3000,
  },
  database: {
    connection: "mongodb+srv://rpg:rpg@cluster0.0ddez.mongodb.net/streinvest5?retryWrites=true&w=majority"
  },
  criptoPasswd: {
    alg: "aes-256-ctr",
    hash: "abcdabcd",
    encode_in: "utf8",
    encode_out: "hex"
  }
}
