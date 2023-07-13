const express = require('express');

const router = express.Router();

const renderTemplate = require('../lib/renderTemplate');
const Beuty = require('../views/Beuty');

const { Review } = require('../../db/models');

router.get('/', async (req, res) => {
  const { login } = req.session;
  const tematic = 'Красота и здоровье';
  const reviews = await Review.findAll({ where: { tematic } });
  renderTemplate(Beuty, { login, reviews }, res);
});

module.exports = router;
