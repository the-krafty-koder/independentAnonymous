import passport from "passport";
import local from  "passport-local";
import mongoose from "mongoose";

const LocalStrategy  = local.Strategy;
const Admin = mongoose.model("Admin");

const config = passport.use(new LocalStrategy({
	usernameField:'email'
  },
  (username,password,done)=>{
  	Admin.findOne({email:username},(err,user)=>{
  		if(err) return done(err);
  		if(!user){
  			return done(null,false,{ message:"Incorrect username" });
  		};
  		if(!user.validatePassword(password)){
  			return done(null,false,{ message:"Incorrect password" });
  		}
  		return done(null,user);
  	});
  }
))

export default config;