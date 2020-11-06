const Sequelize = require('sequelize');
const db = require('./database');

const Appt = db.define('Appt', {
	date: Sequelize.DATE
});

module.exports = Appt;
