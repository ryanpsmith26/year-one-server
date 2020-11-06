const router = require('express').Router();

// USE /api -- mount sub-routers
router.use('/doctors', require('./doctor'));
router.use('/patients', require('./patient'));
router.use('/appts', require('./appt'));

router.use((req, res, next) => {
	const err = new Error('API route not found!');
	err.status = 404;
	next(err);
});

module.exports = router;
