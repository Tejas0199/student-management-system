const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/mamahome'
async function connectWithDB() {
	try {
		await mongoose.connect(DB_URL);
		console.log("connect with DB");
	} catch(err) {
		console.log("Not connected with DB");
	}
}
 
module.exports = { connectWithDB }