const { Schema } = require('mongoose');

const userSchema = new Schema({
	"name" : String,
	"pass" : String
})
const studentSchema = new Schema(
	{
		name : String,
		phone : Number,
		lastName : String,
		fatherName : String,
		permanentAddress : String,
		currentAddress : String,
		DOB : String,
		qualification : String,
		subject : String,
		adhaarno : Number,
		gender : String,
		skills : Array,
		collegeName : String,
		yearOfPassout : String,
		city : String,
		state : String,
		profilePhoto : {
			data : Buffer,
			contentType : String
		},
		sslcCertificate : {
			data : Buffer,
			contentType : String
		},
		puCertificate : {
			data : Buffer,
			contentType : String
		},
		degreeCertificate : {
			data : Buffer,
			contentType : String
		},
		uploadedDate : String,
		description : String
	}
)
module.exports = {userSchema,studentSchema};