const express = require('express');

const { checkUser } = require('../lib/middleweres/common');

const router = express.Router();

router.get('/', checkUser, (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('RaccoonsCookie');
    res.redirect('/');
  });
});

module.exports = router;
