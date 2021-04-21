const express = require('express');
const router = express.Router();
const Test = require('../controller/test');

router.get('/', Test.getTest);


module.exports = router;