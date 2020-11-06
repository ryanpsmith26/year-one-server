const Sequelize = require('sequelize');
const db = require('./database');

const Patient = db.define('Patient', {
	name: Sequelize.STRING
});

module.exports = Patient;
