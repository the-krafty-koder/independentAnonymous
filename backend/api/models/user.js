import mongoose from 'mongoose';
import crypto from "crypto";
import jwt from "jsonwebtoken";

// Admin Schema
const adminSchema = new mongoose.Schema({
	username:{
		type:String,
		required:true,
		unique:true
	},
	email:{
		type:String,
		required:true,
		unique:true
	},
	hash:String,
	salt:String         // used to generate and validate passwords

});

adminSchema.methods.setPassword = function(password){
	this.salt = crypto.randomBytes(16).toString("hex");       // generates a random salt
	this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
	                  .toString("hex");

};

adminSchema.methods.validatePassword = function(password){   
	const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')  
	                   .toString("hex")
	return this.hash === hash;
};

adminSchema.methods.generateJWT = function(){
	let expiry = new Date();
	expiry.setDate(expiry.getDate() + 2);     // set expiry to 2 days

	return jwt.sign({                         // return jwt token
		_id: this._id,
		email: this.email,
		username: this.username,
		exp: parseInt(expiry.getTime() / 1000, 10)
	},process.env.JWT_SECRET)
};

const Admin = mongoose.model("Admin",adminSchema);
export { Admin };