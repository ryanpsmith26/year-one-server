const router = require('express').Router();
const { Movie } = require('../db');

// GET /api/movies
router.get('/', async (req, res, next) => {
	try {
		const movies = await Movie.findAll();
		res.json(movies);
	} catch (error) {
		next(error);
	}
});

// POST /api/movies
router.post('/', async (req, res, next) => {
	try {
		await Movie.findOrCreate({});
	} catch (error) {
		next(error);
	}
});

module.exports = router;
