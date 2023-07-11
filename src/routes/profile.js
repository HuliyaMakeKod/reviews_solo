const express = require('express');

const router = express.Router();

const renderTemplate = require('../lib/renderTemplate');
const Profile = require('../views/Profile');

const { User } = require('../../db/models');
const { Review } = require('../../db/models');

router.get('/', (req, res) => {
  const { login } = req.session;
  renderTemplate(Profile, { login }, res);
});

module.exports = router;
