const Sequelize = require('sequelize');
const db = require('./database');

const Movie = db.define('movie', {
	imdbId: Sequelize.STRING,
	title: Sequelize.STRING,
	thumbsUp: Sequelize.INTEGER,
	thumbsDown: Sequelize.INTEGER
});

module.exports = Movie;
