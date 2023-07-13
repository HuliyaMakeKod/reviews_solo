const express = require('express');

const router = express.Router();

const renderTemplate = require('../lib/renderTemplate');
const Cinema = require('../views/Beuty');

const { Review } = require('../../db/models');

router.get('/', async (req, res) => {
  const { login } = req.session;
  const tematic = 'Кино и мультфильмы';
  const reviews = await Review.findAll({ where: { tematic } });
  renderTemplate(Cinema, { login, reviews }, res);
});

module.exports = router;