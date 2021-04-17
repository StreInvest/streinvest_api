const express = require('express');
const router = express.Router();
const Client = require('../controller/client');

router.post('/', Client.postClient);
router.get('/list', Client.getClient);
router.put('/:id', Client.putClient);
router.get('/user/:id', Client.getClientEspecifico);
router.put('/recover/:id', Client.putClientRecover);
router.delete('/destroy/:id', Client.deleteClientDelete);


module.exports = router;