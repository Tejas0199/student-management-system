const { studentSchema } = require('../db/schema');
const { readFileSync , rmSync } = require('fs');
const { model } = require('mongoose');
const { join } = require('path');
const delectFiles = (req) => {
	rmSync(join(__dirname,"..","uploads",req.files.profilePhoto[0].filename))
	rmSync(join(__dirname,"..","uploads",req.files.sslcCertificate[0].filename))
	rmSync(join(__dirname,"..","uploads",req.files.puCertificate[0].filename))
	rmSync(join(__dirname,"..","uploads",req.files.degreeCertificate[0].filename))
}
const studentRouter = async (req,res) => {
    const student = {  ...req.body,
		uploadedData : new Date().toLocaleString(),
		profilePhoto : {
			data : readFileSync(join(__dirname,"..","uploads",req.files.profilePhoto[0].filename)),
			contentType : 'image/png'
		},
		sslcCertificate : {
			data : readFileSync(join(__dirname,"..","uploads",req.files.sslcCertificate[0].filename)),
			contentType : 'image/png'
		},
		puCertificate : {
			data : readFileSync(join(__dirname,"..","uploads",req.files.puCertificate[0].filename)),
			contentType : 'image/png'
		},
		degreeCertificate : {
			data : readFileSync(join(__dirname,"..","uploads",req.files.degreeCertificate[0].filename)),
			contentType : 'image/png'
		}
	}

	const db = model('student',studentSchema);
	db.create(student,(err) => {
		if(!err) {
			console.log("data stored");
			delectFiles(req);
		} else {
			console.log("data not stored");
		}
		res.sendFile(join(__dirname,"..","public","html","StudentForm1.html"));
	})
}
const studentsRouter = async (req,res) => {
	console.log(req.url)
	let db = model('student',studentSchema);
	db.find().exec((err,students) => {
		if(err) {
			res.send("")
		} else {
			let cp = students.map( student => {
				return {
						name : student.name,
						phone: student.phone,
						lastName : student.lastName,
						fatherName : student.fatherName,
      					permanentAddress: student.permanentAddress,
      					currentAddress: student.currentAddress,
      					DOB: student.DOB,
      					qualification: student.qualification,
      					subject: student.subject,
      					adhaarno: student.adhaarno,
      					gender: student.gender,
      					skills: student.skills,
      					collegeName: student.collegeName,
      					yearOfPassout: student.yearOfPassout,
      					city: student.city,
      					state: student.state,
      					description: student.description,
						profilePhoto : {...student.profilePhoto,data : student.profilePhoto.data.toString('base64')},
						sslcCertificate : {...student.sslcCertificate,data : student.sslcCertificate.data.toString('base64')},
						puCertificate : {...student.puCertificate,data : student.puCertificate.data.toString('base64')},
						degreeCertificate : {...student.degreeCertificate,data : student.degreeCertificate.data.toString('base64')}
					}
			})
			res.send({students : cp});
		}
	})
}

module.exports = { studentRouter , studentsRouter };