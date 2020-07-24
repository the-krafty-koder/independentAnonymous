import mongoose from "mongoose";

const interviewCommentSchema = new mongoose.Schema({
  name:{type:String}, 
  content:{type:String},
  email:{type:String}
});

const interviewSchema = new mongoose.Schema({
  title:{type:String,required:true},
  description:{type:String,required:true},
  date_posted:{type:Date,default:Date.now},
  creator:{type:String,required:false},
  tag:{type:String,required:false},
  image:{type:String,required:true},
  file:{type:String,required:true},
  likes:{type:Number,'default':0},
  comments:[interviewCommentSchema]
});

const podcastSchema = new mongoose.Schema({
  title:{type:String,required:true},
  description:{type:String,required:true},
  date_posted:{type:Date,default:Date.now},
  creator:{type:String,required:false},
  tag:{type:String,required:false},
  image:{type:String,required:true},
  file:{type:String,required:true},
  likes:{type:Number,'default':0},
  comments:[interviewCommentSchema]
});

const Interview = mongoose.model('Interview',interviewSchema,'Interviews');
const Podcast = mongoose.model('Podcast',interviewSchema,'Podcasts');

export { Interview,Podcast};