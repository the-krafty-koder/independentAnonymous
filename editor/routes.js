import express from 'express';
import validator from 'express-validator'
//import quertstring from "querystring";
import { saveArticle,articleUpload } from "./controllers.js";

const { check, validationResult } = validator;

const baseValidator = [
	  check('title').not()
	                .isEmpty()
	                .withMessage('Title is required'),
	  check('author').not()
	                .isEmpty()
	                .withMessage('Author is required'),
	  check('tag').not()
	              .isEmpty()
	               .withMessage('Tag is required')
	]

let router = express.Router();
let apiUrl = "http://127.0.0.1:8080/api/articles/";

router.get('/editor', function(req, res, next) {
  res.render('editor', { title: 'Text editor' });
});

router.post('/editor',function(req,res){
	let tag = req.query.tag;
	let article = req.body.article;
	req.body = {
		content:article,
		...req.query
	};

	if(tag==="song") saveArticle(req,res,`${apiUrl}song-articles`);
	if(tag==="show") saveArticle(req,res,`${apiUrl}show-articles`);
	if(tag==="album")saveArticle(req,res,`${apiUrl}album-articles`);
	if(tag==="movie") saveArticle(req,res,`${apiUrl}movie-articles`);
});

function validation(req,res,type){
		let errors = validationResult(req).array();
		if (errors.length != 0) {
            req.session.errors = errors;
            req.session.success = false;
            res.redirect(`/create/${type}-article`);
        } 
        req.session.success = true;
        req.session.errors = undefined;
        articleUpload(req,res);
 	
};

// song
router.get('/create/song-article',(req,res) => {
	res.render('song_article_form.hbs',{
        success: req.session.success,
        errors: req.session.errors
    });
});
router.post('/create/song-article',
	[
	  ...baseValidator,
	  check('artist').not()
	                .isEmpty()
	                .withMessage('Artist is required'),
	],(req,res) => validation(req,res,'song'));


//album
router.get('/create/album-article',(req,res) => {
	res.render('album_article_form.hbs',{
        success: req.session.success,
        errors: req.session.errors
    });
})
router.post('/create/album-article',
	[
	  ...baseValidator,
	  check('artist').not()
	                .isEmpty()
	                .withMessage('Artist is required'),
	],(req,res) => validation(req,res,'album'));


// show
router.get('/create/show-article',(req,res) => {
	res.render('show_article_form.hbs',{
        success: req.session.success,
        errors: req.session.errors
    });
})
router.post('/create/show-article',
	[
	  ...baseValidator,
	  check('season').not()
	                .isEmpty()
	                .withMessage('Season is required'),
	],(req,res) => validation(req,res,'show'));


//movie
router.get('/create/movie-article',(req,res) => {
	res.render('movie_article_form.hbs',{
        success: req.session.success,
        errors: req.session.errors
    });
})
router.post('/create/movie-article',
	[
	  ...baseValidator,
	],(req,res) => validation(req,res,'movie'));
export default router;