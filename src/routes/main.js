const express = require('express');

const router = express.Router();

const renderTemplate = require('../lib/renderTemplate');
const Main = require('../views/Main');

const { Review } = require('../../db/models');

router.get('/', (req, res) => {
  console.log(req.session);
  const {login} =  req.session
  renderTemplate(Main, { login }, res);
});

module.exports = router;
