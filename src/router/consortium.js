const express = require('express');
const Product = require('../controller/consortium');


const router = express.Router();

router.post('/new/:token', Product.postConsortium)
router.get('/:token', Product.getConsortium)
router.get('/investmentname/:token', Product.getInvestNameSelect)
router.put('/:token/:id', Product.putConsortium)
router.get('/category/:token/', Product.getCategory)

module.exports = router;