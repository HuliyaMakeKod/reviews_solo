const express = require('express');

const router = express.Router();

const renderTemplate = require('../lib/renderTemplate');
const NewReview = require('../views/NewReview');

const { Review } = require('../../db/models');
const { User } = require('../../db/models');

router.get('/', (req, res) => {
  renderTemplate(NewReview, null, res);
});

router.post('/', async (req, res) => {
  const {
    title, tematic, description, type, pic, text,
  } = req.body;
  const { login } = req.session;
  const user = await User.findOne({ where: { login } });
  const userId = user.id;
  try {
    if (!title || !tematic || !type || !text) {
      return res.status(400).json({ msg: 'Поля со звездочкой должны быть заполнены' });
    }
    const newReview = await Review.create({
      title,
      description,
      tematic,
      type,
      text,
      pic,
      user_id: userId,
    });
    req.session.save(() => {
      res.status(200).json({ msg: 'Отзыв опубликован' });
    });
  } catch (error) {
    res.json({ msg: 'Не удалось добавить отзыв' });
  }
});

module.exports = router;
