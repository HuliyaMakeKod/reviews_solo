const express = require('express');
const renderTemplate = require('../lib/renderTemplate');

const router = express.Router();

const Start = require('../views/StartPage');

router.get('/', (req, res) => {
  renderTemplate(Start, null, res);
});

module.exports = router;
