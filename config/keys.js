'use strict'

const dotenv = require('dotenv').config();
module.exports = {
  server: {
    port: process.env.PORT || 3000,
  },
  database: {
    connection: dotenv.parsed.hashDb
  },
  criptoPasswd: {
    alg: "aes-256-ctr",
    hash: dotenv.parsed.hashPassword,
    encode_in: "utf8",
    encode_out: "hex"
  }
}
