const { join } = require('path');

const form1Router = async (req,res) => {
	await res.sendFile(join(__dirname,"..","public","html","StudentForm1.html"));
 }
const loginRouter = async (req,res)=>{
	await res.sendFile(join(__dirname,"..","public","html","login.html"));
}

const studentsTable = async (req,res)=>{
	await res.sendFile(join(__dirname,"..","public","html","StudentTable.html"));
}
module.exports = { form1Router,loginRouter,studentsTable};