const { db } = require('./db');
const app = require('./app');

const port = process.env.PORT || 8080;

db.sync().then(() => {
	console.log('db synced');
	app.listen(port, () => {
		console.log(`Ready to serve MOVIES on PORT:${port}`);
	});
});
