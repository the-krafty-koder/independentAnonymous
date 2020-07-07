import express from 'express';
//import quertstring from "querystring";
import { saveArticle } from "./controllers.js";

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

export default router;