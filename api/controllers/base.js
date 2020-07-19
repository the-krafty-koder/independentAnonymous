import mongoose from "mongoose";

let Article = mongoose.model('Article');

class baseController {
  constructor(discriminator) {
    this.discriminator = discriminator;
  };

  createArticle(req,res,values) {
    let articleValues = [
      {
        title: req.body.title,
        content:req.body.content,
        tag:req.body.tag,
        author:req.body.author,
        ratings:req.body.ratings,
        image:"none",
        ...this.discriminator,
        ...values
      }
    ];
    Article.create(articleValues,(error,article) => {
      if(error){
        console.log(error);
        return res.status(404)
                  .json(error);
      }else{
        return res.status(200)
                  .json(article);;
      }
    });
  };

  getArticleByID(req,res)  {
    Article.find(this.discriminator)
           //.findById(req.params.articleID)
           .then(results => {
             result = results.filter(entry => entry._id == req.params.articleID)

             return res.status(200)
                       .json(result);

           })
           .catch(err => res.status(404)
                            .json(err));
  };

  deleteArticle(req,res){
    Article.findByIdAndRemove(req.params.articleID)
            .exec((error,article) => {
              if(error)return res.status(404)
                                 .json(error)
              return res.status(200)
                        .json(null);
            })
  };

  updateArticle(req,res)  {
    Article.find(this.discriminator)
                        .then(results => {
                          let article = results.filter(entry => entry._id == req.params.articleID)[0]
                          article.title = req.body.title || article.title
                          article.content = req.body.content || article.content
                          article.tag = req.body.tag || article.tag
                          article.author = req.body.author || article.author
                          article.image = req.body.image  || article.image
                          article.artist = req.body.artist  || article.artist
                          article.link = req.body.link  || article.link
                          article.ratings = req.body.ratings || article.ratings
                          article.save((error,article) => {
                            if(error){
                              console.log(error);
                              return res.status(404)
                                               .json(error)}
                            return res.status(200)
                                      .json(article)
                          });

                        })
                        .catch(err => {
                            console.log(err);
                            res.status(404)
                               .json(err);
                        });

  };


  getAllArticles(req,res) {
     Article.find(this.discriminator)
            .then(result => {
              return res.status(200)
                        .json(result);
            })
            .catch(err => res.status(404)
                             .json(err));
  };
};

export default baseController  ;
