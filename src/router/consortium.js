const express = require('express');
const Product = require('../controller/consortium');


const router = express.Router();

// *********** Consorcio *********
router.post('/new/:token', Product.postConsortium)
router.get('/:token', Product.getConsortium)
router.put('/:token/:id', Product.putConsortium)
router.delete('/destroy/:token/:id', Product.deleteConsorcio)


// ********* investimentos
router.post('/invest/new/:token', Product.postInvest)
router.get('/invest/:token', Product.getInvest)
router.put('/invest/:token/:id', Product.putInvest)
router.delete('/invest/destroy/:token/:id', Product.deleteInvest)

module.exports = router;