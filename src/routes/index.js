const express = require('express');
const renderTemplate = require('../lib/renderTemplate');

const router = express.Router();

const Start = require('../views/StartPage');

router.get('/', async (req, res) => {
  const response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=ej6tP50Y5c03YqoGKdDrHgkxyEGhfyXLgifyachE');
  const img = await response.json();
  renderTemplate(Start, { img }, res);
});

module.exports = router;
