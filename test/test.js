import assert from 'assert';
import mongoose  = from 'mongoose';

let Article = mongoose.Model("Article");

let new_article;
beforeEach(() => {
  new_article = Article.create({
    title:"New article",
    content:"New article",
    tag:"general",
    author:"me",
    ratings:4,
    image:"none",
  },(error,article) => {
    if(error){
      return error;
    }else{
      return article;
    }
  });

})
describe("Creating articles",() => {
  it("creates an article",(done) => {
     Article.findOne({title:"New article"})
            .exec((error,article) => {
              if(error){
                return error;
              }else{
                assert(article.title === "New article");
                done();
          }
     });
  });
});
