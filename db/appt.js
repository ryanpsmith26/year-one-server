const Sequelize = require('sequelize');
const db = require('./database');

const Appt = db.define('appt', {
	date: Sequelize.DATE
});

module.exports = Appt;
