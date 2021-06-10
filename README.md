![stapi](https://user-images.githubusercontent.com/54999837/118889676-d371e880-b8d3-11eb-8889-73b488ca068b.png)

### document

[postman document](https://web.postman.co/workspace/streinvest_api~b0c520ff-a642-4531-a688-a14143a9a6a0/documentation/11026666-5e0c3c69-2a35-40be-a695-c13b6a392342)

[https://streinvestapi.herokuapp.com/test](https://streinvestapi.herokuapp.com/test)

```json
// caminho ate o arquivo ==> config/keys.js
module.exports = {
  server: {
    port: process.env.PORT || 3000,
  },
  database: {
    connection: "string de conexao"  // coloque aqui a string de conexao ao banco de dados mongo
  },
  criptoPasswd: {
    alg: "aes-256-ctr",
    hash: "hash criptografia" // coloque aqui a chave para criptografia da senha do usuario,
    encode_in: "utf8",
    encode_out: "hex"
  }
}
```
