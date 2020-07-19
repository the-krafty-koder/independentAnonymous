import multer from 'multer';

const returnPath = function(name){
	let tag = name.split("-")[0];
  	return `uploads/images/${tag}-articles/`;
}

const storage = multer.diskStorage({
  destination:(req,file,callback) => {
  	let dest = returnPath(file.originalname);
    callback(null,dest);
  },
  filename:(req,file,callback) => {
  	let filename = file.originalname.split("-")[1];
    callback(null,filename);
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