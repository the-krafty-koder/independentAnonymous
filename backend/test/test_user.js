import assert from "assert";
import mocha from "mocha";
import mongoose from "mongoose";

import { Admin } from "../api/models/user.js";


describe("tests functions on Admin objects", ()=>{
	before((done)=>{
		mongoose.connect('mongodb://localHost/independentAnonymous');
		const db = mongoose.connection;
		db.on("error",console.error.bind(console,"connection error"));
		db.once("open",()=>{
			console.log("Connected");
			done();
		});
	});	

	it("tests creation of new Admin objects",()=>{
		let admin = new Admin({username:"Kimuli",email:"mofutid"});
		admin.setPassword("kimanimutua");
		admin.save((err)=>{
			console.log(err);
		});
		assert(admin instanceof Admin === true);
	});
})
