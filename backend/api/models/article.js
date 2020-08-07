import mongoose from "mongoose";

let options = {discriminatorKey:"kind"};  // Article discriminator

// Base schema for all articles comments
const articleCommentSchema = new mongoose.Schema({
  name:{type:String},
  content:{type:String},
  email:{type:String}
});

// Base schema for all articles
const articleSchema = new mongoose.Schema({
  title:{type:String,required:true},
  content:{type:String,required:true},
  date_posted:{type:Date,default:Date.now},
  tag:{type:String,required:true},
  author:{type:String,required:true},
  image:{type:String,required:false},
  ratings:{type:Number,'default':0,min:0,max:5},
  comments:[articleCommentSchema]
},options);

const Article = mongoose.model('Article',articleSchema,'Articles');

// Song article schema
const songArticleSchema = new mongoose.Schema({
  artist:{type:String,required:true},
  link:{type:String}
});

// Called before a save is done on the a save is done
songArticleSchema.pre('save',function(next){
  this.tag = "song";

  next();
})

const songArticle = Article.discriminator("SongArticle",songArticleSchema);

// Album article schema
const albumArticleSchema = new mongoose.Schema({
  artist:{type:String,required:true},
  songsList:[String],
})
albumArticleSchema.pre('save',function(next){
  this.tag = "album";

  next();
})

const albumArticle = Article.discriminator("AlbumArticle",albumArticleSchema);

// Show article schema
let showArticleSchema = new mongoose.Schema({
  production:[String],
  season:{type:Number,required:true},
  episode:{type:Number},
  year:{type:Date}
});
showArticleSchema.pre('save',function(next){
  this.tag = "show";

  next();
});

const showArticle = Article.discriminator("ShowArticle",showArticleSchema);

// Movie article schema
const movieArticleSchema = new mongoose.Schema({
  production:[String],
  year:{type:String}
});
movieArticleSchema.pre('save',function(next){
  this.tag = "movie";

  next();
});

const movieArticle = Article.discriminator("MovieArticle",movieArticleSchema);


export { songArticle,movieArticle,albumArticle,showArticle };
