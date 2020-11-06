const router = require('express').Router();
const { Doctor, Patient, Appt } = require('../db');

// GET /api/doctors
router.get('/', async (req, res, next) => {
	try {
		const patients = await Patient.findAll();
		res.json(patients);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
