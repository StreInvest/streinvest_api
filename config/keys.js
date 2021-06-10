'use strict'

module.exports = {
  server: {
    port: process.env.PORT || 3000,
  },
  database: {
    connection: 'string de conexao'
  },
  criptoPasswd: {
    alg: "aes-256-ctr",
    hash: "Hash para criptar",
    encode_in: "utf8",
    encode_out: "hex"
  }
}
