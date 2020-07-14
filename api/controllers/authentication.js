import mongoose from "mongoose";
import passport from "passport";

const Admin = mongoose.model("Admin");

const validateIfAdmin = function(email){
	Admin.findOne({email:email})
	     .exec((err,user)=>{
	     	if(!user || err){
	     		return false
	     	}
	     	return true;
	     });
}
const register = function(req,res){
	const admin = new Admin({
		username:req.body.username,
		email:req.body.email
	})

	admin.setPassword(req.body.password);
	admin.save((err)=>{
		if(err){
			return res.status(404).json(err);
	    }else{
	    	const token = admin.generateJWT();
	    	return res.status(200)
	    	          .json({ token });
	    };
	});
};

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