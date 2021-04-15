const express = require('express');
const router = express.Router();

const Controller = require('./controller');

router.get('/client', Controller.getClient);
router.get('/api', Controller.getConsortium)

module.exports = router;