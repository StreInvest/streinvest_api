const express = require('express');
const Product = require('../controller/investments');

const router = express.Router();

router.post('/:token', Product.postInvest)
router.get('/:token', Product.getInvest)
router.get('/specific/:token/:id', Product.getInvestEspecif)
router.put('/:token/:id', Product.putInvest)
router.delete('/:token/:id', Product.deleteInvest)

module.exports = router;