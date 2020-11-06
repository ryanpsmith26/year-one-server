const faker = require('faker');
const { green, red, cyan, blue } = require('chalk');

const { db, Doctor, Patient, Appt } = require('./db');

async function seed() {
	try {
		console.log(cyan('📡 Connecting to the database...'));
		// Connect to the database
		await db.sync({ force: true });
		console.log(blue('🌱 Seeding the database...'));

		// Seed the database:
		// ===================================
		// Doctors
		for (let i = 0; i < 1000; i++) {
			await Doctor.create({
				firstName: faker.name.firstName(),
				lastName: faker.name.lastName(),
				bio: faker.lorem.paragraph()
			});
		}

		// Patients
		for (let i = 0; i < 1000; i++) {
			await Patient.create({
				firstName: faker.name.firstName(),
				lastName: faker.name.lastName(),
				age: Math.floor(Math.random() * 80) + 14
			});
		}

		// Appt
		for (let i = 0; i < 500; i++) {
			await Appt.create({
				date: faker.date.future(),
				PatientId: Math.floor(Math.random() * 1000) + 1,
				DoctorId: Math.floor(Math.random() * 1000) + 1
			});

			await Appt.create({
				date: faker.date.past(),
				PatientId: Math.floor(Math.random() * 1000) + 1,
				DoctorId: Math.floor(Math.random() * 1000) + 1
			});
		}

		// Magic Methods:
		const doc = await Doctor.findByPk(1);
		const patient = await Patient.findByPk(1);
		const appt = await Appt.findByPk(1);
		console.log('Doctor instance methods:');
		console.log(Object.keys(doc.__proto__));
		console.log('-----------------------');
		console.log('Patient instance methods:');
		console.log(Object.keys(patient.__proto__));
		console.log('-----------------------');
		console.log('Appt instance methods:');
		console.log(Object.keys(appt.__proto__));
		console.log('-----------------------');

		// Close the database connection
		console.log(green('🌴 Finished seeding the database!'));
		await db.close();
	} catch (err) {
		console.log(red('🛑 An error occurred!!'));
		console.error(err);
		await db.close();
	}
}

seed();
