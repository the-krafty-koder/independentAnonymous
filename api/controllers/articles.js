const articleController = require('./base');

const songArticleContoller = new articleController.baseController({kind:"SongArticle"});
var albumArticleContoller = new articleController.BaseController({kind:"AlbumArticle"});
const movieArticleContoller = new articleController.BaseController({kind:"MovieArticle"});
const showArticleContoller = new articleController.BaseController({kind:"ShowArticle"});


const createSongArticle = (req,res) => {
  values = {
    artist:req.body.artist,
    link:req.body.link
  }
  songArticleContoller.createArticle(req,res,values);
};

const createShowArticle = (req,res,next) => {
  values = {
    production:req.body.production,
    season:req.body.season,
    episode:req.body.episode,
    year:req.body.year
  }
  showArticleContoller.createArticle(req,res,values);
}

const createMovieArticle = (req,res) => {
  values = {
    production:req.body.production,
    year:req.body.year
  }
  movieArticleContoller.createArticle(req,res,values);
};

const createAlbumArticle = (req,res) => {
  values = {
    artist:req.body.artist,
    songsList:req.body.songsList.split(",")
  }
  albumArticleContoller.createArticle(req,res,values);
};


module.exports = {
  showArticleContoller,
  albumArticleContoller,
  movieArticleContoller,
  songArticleContoller,
  createMovieArticle,
  createShowArticle,
  createSongArticle,
  createAlbumArticle,
};
