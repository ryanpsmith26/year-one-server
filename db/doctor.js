const Sequelize = require('sequelize');
const db = require('./database');

const Doctor = db.define('Doctor', {
	name: Sequelize.STRING
});

module.exports = Doctor;
