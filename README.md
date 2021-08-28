![stapi](https://user-images.githubusercontent.com/54999837/118889676-d371e880-b8d3-11eb-8889-73b488ca068b.png)

* the structuring of the api does not fully reflect a real investment product, API merely for learning.

### document

* see the documentation before using an api.

[postman document](https://documenter.getpostman.com/view/11026666/TzY69uHJ)

### endpoint of test

> obsolete

[https://streinvestapi.herokuapp.com/test](https://streinvestapi.herokuapp.com/test)

### Development configuration

* To run the application under development;

have nodejs at version 12 or higher, to run the development environment, run `npm run development` or `yarn development` if you have yarn installed.

* Note the connection and security keys are not in a correct place;

```json
// caminho ate o arquivo ==> config/keys.js
module.exports = {
  server: {
    port: process.env.PORT || 3000,
  },
  database: {
    connection: "string de conexao"  // put the mongo database connection string here
  },
  criptoPasswd: {
    alg: "aes-256-ctr",
    hash: "hash criptografia", // put the key for encryption of the user's password here
    encode_in: "utf8",
    encode_out: "hex"
  }
}
``` 
* Another way to put the connection keys is to create a `.env` file at the root of the project, as an example below.

```
hashDb = mongodb+srv://unknown:unknown@cluster0.unknown.mongodb.net/unknown?retryWrites=true&w=majority
hashPassword = unknown
```
