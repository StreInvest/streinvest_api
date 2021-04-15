const express = require('express');
const Product = require('../controller/consortium');


const router = express.Router();

router.post('/', Product.postConsortium)
router.get('/list', Product.getConsortium)

module.exports = router;