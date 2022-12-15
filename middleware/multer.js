const upload = require('multer')({ dest : 'uploads'}) ;
// const storage = multer.diskStorage({
// 	destination: (req, file, cb) => {
// 	    cb(null, '/uploads')
// 	},
// 	filename: (req, file, cb) => {
// 	    cb(null, file.fieldname + '-' + Date.now())
// 	}
//  });
// const upload = multer({ storage : storage });

const allPhotos = upload.fields([
	{
		name : "profilePhoto",
		maxCount : 1
	},
	{ 
		name : "sslcCertificate" ,
		maxCount : 1
	},
	{
		name : "puCertificate",
		maxCount : 1
	},
	{
		name : "degreeCertificate",
		maxCount : 1
	}
])

module.exports = { allPhotos,upload };