import mongoose from "mongoose";
import * as models from "./article.js";
import * as user_models from "./user.js";
import * as media_models from "./media.js";

let dbContainer = 'mongo-database';
let dbURI = `mongodb://${dbContainer}:27017/independentAnonymous`;
mongoose.connect(dbURI,{useNewUrlParser:true});

mongoose.connection.on('connected',() => {
  console.log("Connnection to " + dbURI + " succesful");
})

mongoose.connection.on('error',(err) => {
  console.log("Connnection error",err);
})

mongoose.connection.on('disconnected',() => {
  console.log("Connnection disconnected");
})

const gracefulShutdown = (msg,callback) => {
  mongoose.connection.close(() => {
    console.log("Database connection dsiconnected",msg);
    callback();
  })
}

process.once("SIGUSR2",() => {
  gracefulShutdown("nodemon restart",() => {
    process.kill(process.pid,"SIGUSR2");
  })
})

process.on("SIGINT",() => {
  gracefulShutdown("app termination", () => {
    process.exit(0);
  })
})

process.on("SIGTERM",() => {
  gracefulShutdown("Heroku app termination", () => {
    process.exit(0);
  })
})
