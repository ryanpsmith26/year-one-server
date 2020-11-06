const router = require('express').Router();
const { Doctor, Patient, Appt } = require('../db');

// GET /api/doctors
router.get('/', async (req, res, next) => {
	try {
		const appts = await Appt.findAll();
		res.json(appts);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
