const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// logging middleware
app.use(morgan('dev'));

// serve static files
app.use(express.static(path.join(__dirname, '../public')));

// body parsing middleware -- parses req.body!
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// mount main router
app.use('/api', require('./api'));

// serve up our React app for any routes that don't match an api route
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

// error handling middleware
app.use(function(err, req, res, next) {
	console.error(err);
	console.error(err.stack);
	res.status(err.status || 500).send(err.message || 'Internal server error.');
});

module.exports = app;
