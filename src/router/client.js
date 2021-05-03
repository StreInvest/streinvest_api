const express = require('express');
const router = express.Router();
const Client = require('../controller/client');

router.post('/', Client.postClient);
router.get('/lists', Client.getClient);

module.exports = router;