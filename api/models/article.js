import mongoose from "mongoose";

let options = {discriminatorKey:"kind"};

const articleCommentSchema = new mongoose.Schema({
  name:{type:String},
  content:{type:String},
  email:{type:String}
});

const articleSchema = new mongoose.Schema({
  title:{type:String,required:true},
  content:{type:String,required:true},
  date_posted:{type:Date,default:Date.now},
  tag:{type:String,required:true},
  author:{type:String,required:true},
  image:{type:String,required:true},
  ratings:{type:Number,'default':0,min:0,max:5},
  comments:[articleCommentSchema]
},options);

const Article = mongoose.model('Article',articleSchema,'Articles');

const songArticleSchema = new mongoose.Schema({
  artist:{type:String,required:true},
  link:{type:String}
});
songArticleSchema.pre('save',(next) => {
  this.tag = "song";

  next();
})

const songArticle = Article.discriminator("SongArticle",songArticleSchema);


const albumArticleSchema = new mongoose.Schema({
  artist:{type:String,required:true},
  songsList:[String],
})
albumArticleSchema.pre('save',(next) => {
  this.tag = "album";

  next();
})

const albumArticle = Article.discriminator("AlbumArticle",albumArticleSchema);


const showArticleSchema = new mongoose.Schema({
  production:[String],
  season:{type:Number,required:true},
  episode:{type:Number},
  year:{type:Date}
})
showArticleSchema.pre('save',(next) => {
  this.tag = "show";

  next();
});

const showArticle = Article.discriminator("ShowArticle",showArticleSchema);


const movieArticleSchema = new mongoose.Schema({
  production:[String],
  year:{type:String}
});
movieArticleSchema.pre('save',(next) => {
  this.tag = "movie";

  next();
});

const movieArticle = Article.discriminator("MovieArticle",movieArticleSchema);


export { songArticle,movieArticle,albumArticle,showArticle };
