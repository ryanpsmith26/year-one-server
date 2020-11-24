const router = require('express').Router();
const { Movie } = require('../db');

// GET api/movies/:imdbId -- get vote data if exists in DB
router.get('/:imdbId', async (req, res, next) => {
	try {
		const movie = await Movie.findOne({
			where: {
				imdbId: req.params.imdbId
			}
		});
		if (movie) res.json(movie);
		else res.json({ thumbsUp: 0, thumbsDown: 0 });
	} catch (error) {
		next(error);
	}
});

// PUT /api/movies/thumbsUp
router.put('/thumbsUp', async (req, res, next) => {
	try {
		const [ movie, created ] = await Movie.findOrCreate({
			where: {
				imdbId: req.body.imdbId
			},
			defaults: {
				title: req.body.title,
				thumbsUp: 1,
				thumbsDown: 0
			}
		});
		if (!created) {
			await movie.thumbsUp++;
			await movie.save();
		}
		res.sendStatus(204);
	} catch (error) {
		next(error);
	}
});

// PUT /api/movies/thumbsDown
router.put('/thumbsDown', async (req, res, next) => {
	try {
		const [ movie, created ] = await Movie.findOrCreate({
			where: {
				imdbId: req.body.imdbId
			},
			defaults: {
				title: req.body.title,
				thumbsUp: 0,
				thumbsDown: 1
			}
		});
		if (!created) {
			await movie.thumbsDown++;
			await movie.save();
		}
		res.sendStatus(204);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
