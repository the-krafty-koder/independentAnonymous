import express from "express";
import { upload,fileUpload,mediaUpload,
       interviewCreate,interviewUpdate,podcastCreate,podcastUpdate,getPodcastByID,getInterviewByID,getAllInterviews} 
from '../controllers/uploads.js';

const router = express.Router();

router.post("/podcast/image",upload.single("file"),(req,res)=>fileUpload(req,res));
router.post("/interview/image",upload.single("file"),(req,res)=>fileUpload(req,res));

router
      .route('/interview')
      .post((req,res) => interviewCreate(req,res))
      .get((req,res) => getAllInterviews(req,res));

router
      .route('/interview/:interviewID')
      .put((req,res) => interviewUpdate(req,res))
      .delete((req,res) => albumArticleContoller.deleteArticle(req,res))
      .get((req,res) => getInterviewByID(req,res));

router
      .route('/podcast')
      .post((req,res) => podcastCreate(req,res))
      .get((req,res) => getAllInterviews(req,res));

router
      .route('/podcast/:podcastID')
      .put((req,res) => podcastUpdate(req,res))
      .delete((req,res) => albumArticleContoller.deleteArticle(req,res))
      .get((req,res) => getPodcastByID(req,res));

router.post("/media",upload.single("file"),(req,res)=>mediaUpload(req,res));
router.get("/media",(req,res)=>{
	res.render("upload.hbs");
})

export default router;