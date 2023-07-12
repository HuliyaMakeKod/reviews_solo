const express = require('express');

const router = express.Router();

const renderTemplate = require('../lib/renderTemplate');
const Profile = require('../views/Profile');

const { User } = require('../../db/models');
const { Review } = require('../../db/models');

router.get('/', (req, res) => {
  const { name, login, email } = req.session;
  renderTemplate(Profile, { name, login, email }, res);
});

module.exports = router;
