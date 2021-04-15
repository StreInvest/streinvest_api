const express = require('express');
const router = express.Router();
const Client = require('../controller/client');

router.post('/', Client.postClient);
router.get('/list', Client.getClient);

module.exports = router;