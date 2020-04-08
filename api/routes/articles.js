var express = require("express");
var router = express.Router();

const controllers = require('../controllers/articles');

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
      .post(controllers.createSongArticle)
      .get(controllers.songArticleContoller.getAllArticles);



router
      .route('/articles/song-articles/:articleID')
      //.get(controllers.songArticleController.getArticleByID)
      .put(controllers.songArticleContoller.updateArticle)
      .delete(controllers.songArticleContoller.deleteArticle);

// Show articles
router
      .route('/articles/show-articles')
      .post(controllers.createShowArticle)
      .get(controllers.showArticleContoller.getAllArticles);

router
      .route('/articles/show-articles/:articleID')
      .put(controllers.showArticleContoller.updateArticle)
      .delete(controllers.showArticleContoller.deleteArticle)
      //.get(controllers.showArticleControllers.getArticleByID);

// Album articles
router
      .route('/articles/album-articles')
      .post(controllers.createAlbumArticle)
      //.get(controllers.albumArticleController.getAllArticles);


router
      .route('/articles/album-articles/:articleID')
      .put(controllers.albumArticleContoller.updateArticle)
      .delete(controllers.albumArticleContoller.deleteArticle)
      //.get(controllers.albumArticleControllers.getArticleByID);

router
      .route('/articles/movie-articles')
      .post(controllers.createMovieArticle)
      .get(controllers.movieArticleContoller.getAllArticles);

router
      .route('/articles/movie-articles/:articleID')
      //.get(controllers.movieArticleController.getArticleByID)
      .put(controllers.movieArticleContoller.updateArticle)
      .delete(controllers.movieArticleContoller.deleteArticle);


module.exports = router;
