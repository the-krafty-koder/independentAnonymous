import multer from 'multer';

const storage = multer.diskStorage({
  destination:(req,file,callback) => {
    callback(null,"uploads/images/");
  },
  filename:(req,file,callback) => {
    callback(null,file.originalname);
  },
});

let upload = multer({storage:storage});

const fileUpload = function(req,res){
	const imageFile = req.file;

	if(!imageFile){
		return res.status(404)
		          .json("No file uploaded");
	}
	res.send(imageFile);
	return res.status(200)
	          .json(imageFile.filename);
};

export { upload,fileUpload };