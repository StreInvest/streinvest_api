const express = require('express');
const router = express.Router();
const Test = require('../controller/test');

router.get('/', Test.getTest);
router.get('/senha', Test.getUsersEspecifico);


module.exports = router;