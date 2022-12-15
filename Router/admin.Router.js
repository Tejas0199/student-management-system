const { model } = require('mongoose');
const { userSchema } = require('../db/schema');

async function adminRouter (req,res) {
	req.on('data',async data => {

		const {name,pass }= JSON.parse(data.toString());
		const db = model('users',userSchema);
		
		res.send({name,validationStatus : true})


		// db.findOne({"name" : name }).exec((err,data) => {
		// 	if(! err) {
		// 		console.log(data + "   " + pass)
		// 		if(data && data.pass === pass) {
		// 			res.send({name,validationStatus : true})
		// 		} else {
		// 			res.send({name,validationStatus : false })
		// 		}
		// 	}
		// })


//new user//

		// db.create({name,pass},(err,data) => 
		// {
		// 	if(! err) {
		// 		console.log("inserted")
		// 	} else {
		// 		console.log("not inserted")
		// 	}
		// })


	 })
	
}

module.exports = adminRouter;