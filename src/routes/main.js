const express = require('express');

const router = express.Router();

const renderTemplate = require('../lib/renderTemplate');
const Main = require('../views/Main');

const { Review } = require('../../db/models');

router.get('/', (req, res) => {
  renderTemplate(Main, null, res);
});

module.exports = router;