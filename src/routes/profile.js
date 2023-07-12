const express = require('express');

const router = express.Router();

const renderTemplate = require('../lib/renderTemplate');
const Profile = require('../views/Profile');

const { User } = require('../../db/models');
const { Review } = require('../../db/models');

router.get('/', async (req, res) => {
  const { name, login, email } = req.session;
  const user = await User.findOne({ where: { login } });
  const userId = user.id;
  const reviews = await Review.findAll({ where: { user_id: userId } });
  console.log(reviews);
  renderTemplate(Profile, {
    name, login, email, reviews,
  }, res);
});

module.exports = router;
