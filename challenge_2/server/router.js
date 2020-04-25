const express = require('express');
const controller = require('./controller')
// ***********************************
// middleware
// ***********************************
// api routing 
const router = express.Router();

router.get('/', controller.getHistory);

// router.post('/', controller.postLead);

// router.put('/', controller.updateLead);

// router.delete('/', controller.deleteLead);

module.exports = router;