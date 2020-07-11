import axios from 'axios';
import querystring from 'querystring';

function saveArticle(req,res,url){
	axios.post(url,req.body)
	     .then(response => {
	     	res.redirect("/api/articles/song-articles"); //refactor
	     })
	     .catch(err=>console.log(err));
}

function articleUpload(req,res){
	const params = querystring.encode(req.body);
	res.redirect(`/editor?${params}`);
}



export { saveArticle,articleUpload };
