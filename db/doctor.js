const Sequelize = require('sequelize');
const db = require('./database');

const Doctor = db.define('doctor', {
	firstName: Sequelize.STRING,
	lastName: Sequelize.STRING,
	bio: Sequelize.TEXT
});

module.exports = Doctor;
