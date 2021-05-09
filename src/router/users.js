const express = require('express');
const router = express.Router();
const Client = require('../controller/users');

router.post('/', Client.postClient);
router.get('/lists', Client.getClient);
router.put('/:id', Client.putClient);
router.get('/:id', Client.getClientEspecifico);
router.put('/recover/:id', Client.putClientRecover);
router.delete('/:id', Client.deleteClient);


module.exports = router;