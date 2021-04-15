const faker = require("faker")
const crypto = require('crypto')

exports.getClient = async (req, res, next) => {
  try {

    return res.json({
     response: [{
      "_id": "jj8udh737bdbsbsvsss-s-dsids-sdsdjs",
      "nome": ""+faker.name.firstName()+" "+faker.name.lastName(),
      "email": ""+faker.internet.email(),
      "senha": faker.internet.password(),
      "token": "Rf7-0sjs34fhh-938272",
      "adm": false,
      "created_at": ""+faker.date.recent(),
      "updated_at": ""+faker.date.recent()
     },
     {
      "_id": "jj8udh737bdbsbsvsss-s-dsids-sdsdjs",
      "nome": ""+faker.name.firstName()+" "+faker.name.lastName(),
      "email": ""+faker.internet.email(),
      "senha": faker.internet.password(),
      "token": "Rnfu-0sjs34fhh-938272",
      "adm": true,
      "created_at": ""+faker.date.recent(),
      "updated_at": ""+faker.date.recent()
     },
     {
      "_id": "jj8udh737bdbsbsvsss-s-dsids-sdsdjs",
      "nome": ""+faker.name.firstName()+" "+faker.name.lastName(),
      "email": ""+faker.internet.email(),
      "senha": faker.internet.password(),
      "token": "383838ujdhfjdfhh-938272",
      "adm": false,
      "created_at": ""+faker.date.recent(),
      "updated_at": ""+faker.date.recent()
     }],
    "status": 200
    });
  } catch (err) {
    next(err);
  }
}



exports.postClient = async (req, res, next) => {
  try {
    const response = req.body
    response['_id'] = "isd833nsjndjsjds-sdsds-sdsdsd"
    response['token'] = "hdus73bbsshsshjd6sdgs"
    response['master'] = true
    response['created_at'] = faker.date.recent()
    response['updated_at'] = faker.date.recent()

    const senha = response['senha']
    response['senha'] = crypto.createHash('md5').update(senha).digest('hex')

    return res.json({response, status: 201})

  }
  catch (err) {
    next(err);
  }
}