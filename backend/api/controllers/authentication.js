import mongoose from "mongoose";
import passport from "passport";

const Admin = mongoose.model("Admin");

/*
 * validateIfAdmin(email) => Boolean
 * email: String
 * Checks if user with given email is a valid Admin
*/
const validateIfAdmin = function(email){
	Admin.findOne({email:email})
	     .exec((err,user)=>{
	     	if(!user || err){
	     		return false
	     	}
	     	return true;
	     });
}

/*
 * register(req,res) => Object
 * req: Request object
 * res: Response object
 *
 * Registers a new user as an Admin
*/
const register = function(req,res){
	const admin = new Admin({
		username:req.body.username,
		email:req.body.email
	})

	admin.setPassword(req.body.password);    // sets user password
	admin.save((err)=>{
		if(err){
			return res.status(404).json(err);
	    }else{
	    	const token = admin.generateJWT();  // generates JSON web token
	    	return res.status(200)
	    	          .json({ token });
	    };
	});
};

/*
 * login(req,res) => Object
 * req: Request object
 * res: Response object
 *
 * Authenticates a new user
*/
const login = function(req,res){
	passport.authenticate('local',(error,admin,info)=>{
		let token;
		if(error){
			return res.status(404)
			          .json(err);
		}
		if(admin){
			token = admin.generateJWT();
			res.status(200)
			   .json({ token });
		}else{
			res.status(404)
			   .json(info);
		}
	})(req,res);
}
export { register,login,validateIfAdmin }