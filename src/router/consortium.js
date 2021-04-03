const express = require('express');
const Product = require('../controller/consortium');


const router = express.Router();

router.post('/new/:token', Product.postConsortium)
router.get('/:token', Product.getConsortium)

module.exports = router;