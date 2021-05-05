const express = require('express');
const router = express.Router();
const Client = require('../controller/client');

router.post('/', Client.postClient);
router.get('/lists', Client.getClient);
router.put('/:id', Client.putClient);
router.get('/:id', Client.deleteClient);

module.exports = router;