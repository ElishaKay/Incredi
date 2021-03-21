const express = require('express');
const router = express.Router();

const { getSumsPerParentPerYear,
		getPercentageDifferencesPerDate } = require('../controllers/stats')

router.get('/sums-per-parent', getSumsPerParentPerYear);

router.get('/percentage-difference-per-date', getPercentageDifferencesPerDate);

module.exports = router; 
