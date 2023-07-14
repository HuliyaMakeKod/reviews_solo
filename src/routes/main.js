const express = require('express');

const router = express.Router();

const renderTemplate = require('../lib/renderTemplate');
const Main = require('../views/Main');
const ShowReview = require('../views/ShowReview');

const { Review } = require('../../db/models');

router.get('/', async (req, res) => {
  const reviews = await Review.findAll();
  const { login } = req.session;
  renderTemplate(Main, { login, reviews }, res);
});

router.get('/show_review/:id', async (req, res) => {
  const review = await Review.findOne({ where: { id: req.params.id } });
  const { login } = req.session;
  renderTemplate(ShowReview, { review, login }, res);
});

module.exports = router;
