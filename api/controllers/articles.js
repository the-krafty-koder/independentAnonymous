import baseController from './base.js';
import { validateIfAdmin } from './authentication.js';

let songArticleContoller = new baseController({kind:"SongArticle"});
const albumArticleContoller = new baseController({kind:"AlbumArticle"});
const movieArticleContoller = new baseController({kind:"MovieArticle"});
const showArticleContoller = new baseController({kind:"ShowArticle"});


const createSongArticle = (req,res) => {
  let values = {
    artist:req.body.artist,
    link:req.body.link
  };
  songArticleContoller.createArticle(req,res,values);
  /*
  if(validateIfAdmin(req.payload.email)===true){
    songArticleContoller.createArticle(req,res,values);
  }else{
    return res.status(404)
              .json("User is not a registered admin");
  }*/
};

const createShowArticle = (req,res,next) => {
  let values = {
    production:req.body.production,
    season:req.body.season,
    episode:req.body.episode,
    year:req.body.year
  }
  showArticleContoller.createArticle(req,res,values);
}

const createMovieArticle = (req,res) => {
  let values = {
    production:req.body.production,
    year:req.body.year
  }
  movieArticleContoller.createArticle(req,res,values);
};

const createAlbumArticle = (req,res) => {
  let values = {
    artist:req.body.artist,
    songsList:req.body.songsList.split(",")
  }
  albumArticleContoller.createArticle(req,res,values);
};

export {
  showArticleContoller,
  albumArticleContoller,
  movieArticleContoller,
  songArticleContoller,
  createMovieArticle,
  createShowArticle,
  createSongArticle,
  createAlbumArticle,
};
