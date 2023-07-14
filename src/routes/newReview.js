const express = require('express');

const router = express.Router();
const multer = require('multer');

const renderTemplate = require('../lib/renderTemplate');
const NewReview = require('../views/NewReview');

const { Review } = require('../../db/models');
const { User } = require('../../db/models');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    return cb(null, './uploads');
  },
  filename(req, file, cb) {
    return cb(null, `${file.originalname}`);
  },
});

const upload = multer({ storage });

router.get('/', (req, res) => {
  const { login } = req.session;
  renderTemplate(NewReview, { login }, res);
});

router.post('/', upload.single('pic'), async (req, res) => {
  const img = String(req.file.filename);
  const {
    title, tematic, description, type, pic, text,
  } = req.body;
  const { login } = req.session;
  const user = await User.findOne({ where: { login } });
  const userId = user.id;
  try {
    // if (!title || !tematic || !type || !text) {
    //   return res.status(400).json({ msg: 'Поля со звездочкой должны быть заполнены' });
    // }
    const newReview = await Review.create({
      title,
      description,
      tematic,
      type,
      text,
      pic: `/uploads/${img}`,
      user_id: userId,
    });
    req.session.save(() => {
      res.redirect('/main');
    });
  } catch (error) {
    res.json({ msg: 'Не удалось добавить отзыв' });
  }
});

module.exports = router;
