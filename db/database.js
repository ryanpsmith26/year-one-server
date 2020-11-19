const Sequelize = require('sequelize');
const dbName = 'year-one';

const db = new Sequelize(process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`, {
	logging: false
});

module.exports = db;
