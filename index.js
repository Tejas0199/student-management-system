const express = require('express');
const bodyParser = require('body-parser');
const { connectWithDB } = require('./db/db');
const { allPhotos } = require('./middleware/multer');
const {form1Router,loginRouter,studentsTable} = require('./Router/page.Router');
const adminRouter = require('./Router/admin.Router');
const { studentRouter,studentsRouter } = require('./Router/student.Router')


const port = 2000;
const hostName ='127.0.0.5';
const app = express();

//----------middle ware-------------//
app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));



app.get('/',loginRouter);
app.post('/admin',adminRouter);
app.get('/students',studentsTable)
app.get('/StudentForm1',form1Router);
app.get('/student',studentsRouter);
app.post('/student',allPhotos,studentRouter);

app.listen(port,hostName,async () => {
    await connectWithDB();
    console.log(`server started with ${hostName}:${port}`);
});