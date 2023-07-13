const express = require('express');

const router = express.Router();

const renderTemplate = require('../lib/renderTemplate');
const Books = require('../views/Books');

const { Review } = require('../../db/models');

router.get('/', async (req, res) => {
  const { login } = req.session;
  const tematic = 'Книги';
  const reviews = await Review.findAll({ where: { tematic } });
  renderTemplate(Books, { login, reviews }, res);
});

module.exports = router;