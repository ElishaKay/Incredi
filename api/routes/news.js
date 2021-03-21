const express = require('express');
const router = express.Router();

const { getNews, 
		getCategoryNews, 
		getCountryNews, 
		getCountryNewsByIP } = require('../controllers/news')

router.get('/articles', getNews);
router.get('/articles/category/:category', getCategoryNews);
router.get('/articles/country/:country', getCountryNews);
router.get('/articles/countrybyip/:ip', getCountryNewsByIP);


module.exports = router; 
