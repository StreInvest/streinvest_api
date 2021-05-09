const express = require('express');
const Product = require('../controller/consortium');


const router = express.Router();

// *********** Consorcio *********
router.post('/:token', Product.postConsortium)
router.get('/:token', Product.getConsortium)
router.put('/:token/:id', Product.putConsortium)
router.delete('/:token/:id', Product.deleteConsorcio)

module.exports = router;