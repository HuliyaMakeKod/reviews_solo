const express = require('express');

const router = express.Router();

const renderTemplate = require('../lib/renderTemplate');
const Profile = require('../views/Profile');
const ChengeReview = require('../views/EditReview');

const { checkUser } = require('../lib/middleweres/common');

const { User } = require('../../db/models');
const { Review } = require('../../db/models');

router.get('/', checkUser, async (req, res) => {
  const { name, login, email } = req.session;
  const user = await User.findOne({ where: { login } });
  const userId = user.id;
  const reviews = await Review.findAll({ where: { user_id: userId } });
  renderTemplate(Profile, {
    name, login, email, reviews,
  }, res);
});

router.delete('/delete_review/:id', async (req, res) => {
  try {
    await Review.destroy({ where: { id: req.params.id } });
    return res.json({ status: 200 });
  } catch (error) {
    res.json({ status: 500 });
  }
});

router.get('/change_review_form/:id', async (req, res) => {
  await Review.findOne({ where: { id: req.params.id } });
  const review = await Review.findOne({ where: { id: req.params.id } });
  const {
    title, tematic, description, type, pic, text,
  } = review;
  renderTemplate(ChengeReview, {
    title, tematic, description, type, pic, text,
  }, res);
});

// router.put('/done_change_review_form/:id', async (req.res) => {

// })

module.exports = router;
