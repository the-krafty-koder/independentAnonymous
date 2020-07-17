import express from "express";
let router = express.Router();
import jw from "express-jwt";
const jwt = jw;
const auth = jwt({secret:"Secret",userProperty:'payload'});

import {
  showArticleContoller,
  albumArticleContoller,
  movieArticleContoller,
  songArticleContoller,
  createMovieArticle,
  createShowArticle,
  createSongArticle,
  createAlbumArticle,
} from '../controllers/articles.js';
import { upload,fileUpload } from '../controllers/uploads.js';
import { login,register } from "../controllers/authentication.js";

/*
router
      .route('/articles')
      .post(apiControllers.createArticle)
     .get(apiControllers.getAllArticles);

controllers.songArticleContoller.getAllArticles
*/
// Song articles


router
      .route('/articles/song-articles')
      .post(auth,(req,res)=>createSongArticle(req,res))
      .get((req,res) => songArticleContoller.getAllArticles(req,res));



router
      .route('/articles/song-articles/:articleID')
      .get((req,res) => songArticleContoller.getArticleByID(req,res))
      .put((req,res) => songArticleContoller.updateArticle(req,res))
      .delete((req,res) => songArticleContoller.deleteArticle(req,res));

// Show articles
router
      .route('/articles/show-articles')
      .post((req,res) => createShowArticle(req,res))
      .get((req,res) => showArticleContoller.getAllArticles(req,res));

router
      .route('/articles/show-articles/:articleID')
      .put((req,res) => showArticleContoller.updateArticle(req,res))
      .delete((req,res) => controllers.showArticleContoller.deleteArticle(req,res))
      .get((req,res) => showArticleContollers.getArticleByID(req,res));

// Album articles
router
      .route('/articles/album-articles')
      .post((req,res) => createAlbumArticle(req,res))
      .get((req,res) => albumArticleContoller.getAllArticles(req,res));


router
      .route('/articles/album-articles/:articleID')
      .put((req,res) => albumArticleContoller.updateArticle(req,res))
      .delete((req,res) => albumArticleContoller.deleteArticle(req,res))
      .get((req,res) => albumArticleContoller.getArticleByID(req,res));

router
      .route('/articles/movie-articles')
      .post((req,res) => createMovieArticle(req,res))
      .get((req,res) => movieArticleContoller.getAllArticles(req,res));

router
      .route('/articles/movie-articles/:articleID')
      .get((req,res) => movieArticleController.getArticleByID(req,res))
      .put((req,res) => movieArticleContoller.updateArticle(req,res))
      .delete((req,res) => movieArticleContoller.deleteArticle(req,res));

router.post('/upload',upload.single('file'),(req,res)=> fileUpload(req,res))

router.post('/register',(req,res)=> register(req,res));
router.post('/login',(req,res)=>login(req,res));


export default router ;
