const db = require('./database');
const Doctor = require('./doctor');
const Patient = require('./patient');
const Appt = require('./appt');

Patient.hasMany(Appt);
Appt.belongsTo(Patient);

Doctor.hasMany(Appt);
Appt.belongsTo(Doctor);

module.exports = {
	db,
	Doctor,
	Patient,
	Appt
};
