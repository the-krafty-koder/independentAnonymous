import axios from 'axios';

function saveArticle(req,res,url){
	axios.post(url,req.body)
	     .then(response => {
	     	res.redirect("/api/articles/song-articles"); //refactor
	     })
	     .catch(err=>console.log(err));
}

export { saveArticle };
