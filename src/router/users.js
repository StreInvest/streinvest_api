const express = require('express');
const router = express.Router();
const Client = require('../controller/users');

router.post('/', Client.postClient);
router.get('/lists', Client.getClient);
router.put('/:id', Client.putClient);
router.get('/spec', Client.getClientEspecificoEmail);
router.get('/:id', Client.getClientEspecificoId);
router.get('/recover/:id', Client.getClientRecover);

router.delete('/:id', Client.deleteClient);

module.exports = router;