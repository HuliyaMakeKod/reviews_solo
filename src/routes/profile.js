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
  renderTemplate(ChengeReview, {
    review,
  }, res);
});

router.put('/change_review_form/:id', async (req, res) => {
  await Review.findOne({ where: { id: req.params.id } });
  try {
    const review = await Review.findOne({ where: { id: req.params.id } });
    const {
      change_title, change_tematic, change_description, change_type, change_pic, change_text,
    } = req.body;
    review.title = change_title;
    review.tematic = change_tematic;
    review.description = change_description;
    review.type = change_type;
    review.pic = change_pic;
    review.text = change_text;
    review.save();
    return res.json({ status: 200 });
  } catch (error) {
    res.json({ status: 500 });
  }
});

module.exports = router;
