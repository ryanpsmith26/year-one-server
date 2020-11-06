const Sequelize = require('sequelize');
const db = require('./database');

const Patient = db.define('Patient', {
	firstName: Sequelize.STRING,
	lastName: Sequelize.STRING,
	age: Sequelize.INTEGER
});

module.exports = Patient;
