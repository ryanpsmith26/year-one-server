const router = require('express').Router();

// USE /api -- mount sub-routers
router.use('/movies', require('./movie'));

router.use((req, res, next) => {
	const err = new Error('API route not found!');
	err.status = 404;
	next(err);
});

module.exports = router;
