const express = require('express');

const router = express.Router();

const renderTemplate = require('../lib/renderTemplate');
const Main = require('../views/Main');
const { checkUser } = require('../lib/middleweres/common');

const { Review } = require('../../db/models');

router.get('/', checkUser, (req, res) => {
  const { login } = req.session;
  renderTemplate(Main, { login }, res);
});

module.exports = router;
