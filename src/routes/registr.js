const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

const renderTemplate = require('../lib/renderTemplate');
const Registr = require('../views/Registr');

const { User } = require('../../db/models');

router.get('/', (req, res) => {
  renderTemplate(Registr, null, res);
});

router.post('/', async (req, res) => {
  const {
    name, login, email, password, country,
  } = req.body;
  console.log(country);
  try {
    const oldUserEmail = await User.findOne({ where: { email } });
    const oldUserLogin = await User.findOne({ where: { login } });
    if (oldUserEmail || oldUserLogin) {
      return res
        .status(409)
        .json({ msg: 'Пользователь с такими данными уже зарегистрирован' });
    }
    if (!login || !email || !password) {
      return res.status(400).json({ msg: 'Поля со звездочкой должны быть заполнены' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      login,
      email,
      password: hashedPassword,
      country,
    });
    req.session.login = newUser.login;
    req.session.name = newUser.name;
    req.session.email = newUser.email;
    req.session.save(() => {
      res.status(200).json({ msg: 'Пользователь зарегистрирован' });
    });
  } catch (error) {
    res.json({ msg: 'Не удалось добавить нового пользователя' });
  }
});

module.exports = router;
