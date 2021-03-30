const express = require('express');
const Product = require('../controller/product');
// const auth = require('../middleware/auth');


const router = express.Router();

router.post('/', Product.postProduct)
router.get('/list', Product.getClient)

module.exports = router;