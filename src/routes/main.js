const express = require('express');

const router = express.Router();

const renderTemplate = require('../lib/renderTemplate');
const Main = require('../views/Main');

const { Review } = require('../../db/models');

router.get('/', async (req, res) => {
  const reviews = await Review.findAll();
  const { login } = req.session;
  renderTemplate(Main, { login, reviews }, res);
});

module.exports = router;
