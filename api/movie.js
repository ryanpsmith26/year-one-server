const router = require('express').Router();
const { Doctor, Patient, Appt } = require('../db');

// GET /api/doctors
router.get('/', async (req, res, next) => {
	try {
		const doctors = await Doctor.findAll();
		res.json(doctors);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
