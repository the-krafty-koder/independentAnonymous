import multer from 'multer';
import mongoose from "mongoose";

let Interview = mongoose.model('Interview');
let Podcast = mongoose.model('Podcast');

/*
 * returnPath(name) => String
 *
 * Returns path to save file to
*/
const returnPath = function(name){
	let tag = name.split("-")[0];
	let path = `uploads/images/${tag}-articles/`;
	switch(tag){
		case("podcast"):
		  path='uploads/podcasts/';
		  break;
		case("video"):
		  path='uploads/videos/';
		  break;
		case("videoImage"):
		  path='uploads/images/videos/';
		  break;
		case("podcastImage"):
		  path='uploads/images/podcasts/';
		  break;
	};
	return path;
}

/*
 * Multer configuration
*/
const storage = multer.diskStorage({
  destination:(req,file,callback) => {
  	let dest = returnPath(file.originalname);
    callback(null,dest);
  },
  filename:(req,file,callback) => {
  	let filename = file.originalname.split("-")[1];
    callback(null,filename);
  },
});

let upload = multer({storage:storage});

/*
 * fileUpload(req,res) => Object
 *
 * Handles file uploads via multer
*/
const fileUpload = function(req,res){
	const imageFile = req.file;

	if(!imageFile){
		return res.status(404)
		          .json("No file uploaded");
	}
	res.send(imageFile);
	return res.status(200)
	          .json(imageFile.filename);
};

const mediaUpload = function(req,res){
	const videoFile = req.file;

	if(!videoFile){
		return res.status(404)
		          .json("No file uploaded");
	}
	res.send(videoFile);
	return res.status(200)
	          .json(imageFile.filename);
};

const podcastCreate  = function(req,res){
	let podcastValues = [
      {
        title: req.body.title,
        description:req.body.description,
        tag:req.body.tag,
        creator:req.body.creator,
        likes:req.body.r,
        image:"none",
        file:"none",
      }
    ];
	Podcast.create(podcastValues,(error,podcast)=>{
		if(error)return res.status(404)
			               .json(error);
	    return res.status(200)
	              .json(podcast);
	})
}

const interviewCreate  = function(req,res){
	let interviewValues = [
      {
        title: req.body.title,
        description:req.body.description,
        tag:req.body.tag,
        creator:req.body.creator,
        likes:req.body.r,
        image:"none",
        file:"none",
      }
    ];
	Interview.create(interviewValues,(error,interview)=>{
		if(error)return res.status(404)
			               .json(error);
	    return res.status(200)
	              .json(interview)
	})
}

const interviewUpdate = function(req,res){
	Interview.findById(req.params.interviewID)
                        .exec((error,interview) => {
                          if(error) return res.status(404)
                          	                  .json(error);

                          interview.title = req.body.title || interview.title
                          interview.description = req.body.description || interview.description
                          interview.tag = req.body.tag || interview.tag
                          interview.creator = req.body.creator || interview.creator
                          interview.image = req.body.image  || interview.image
                          interview.file = req.body.file  || interview.file
                          interview.likes = req.body.likes  || interview.likes
                          interview.save((error,interview) => {
                            if(error){
                              console.log(error);
                              return res.status(404)
                                               .json(error)}
                            return res.status(200)
                                      .json(interview)
                          });

                        })
                        .catch(err => {
                            console.log(err);
                            res.status(404)
                               .json(err);
                        });

};

const podcastUpdate = function(req,res){
	Podcast.findById(req.params.podcastID)
                        .exec((error,podcast) => {
                          if(error) return res.status(404)
                          	                  .json(error);

                          podcast.title = req.body.title || podcast.title
                          podcast.description = req.body.description || podcast.description
                          podcast.tag = req.body.tag || podcast.tag
                          podcast.creator = req.body.creator || podcast.creator
                          podcast.image = req.body.image  || podcast.image
                          podcast.file = req.body.file  || podcast.file
                          podcast.likes = req.body.likes  || podcast.likes
                          podcast.save((error,podcast) => {
                            if(error){
                              console.log(error);
                              return res.status(404)
                                               .json(error)}
                            return res.status(200)
                                      .json(podcast);
                          });

                        })
                        .catch(err => {
                            console.log(err);
                            res.status(404)
                               .json(err);
                        });

};

const getInterviewByID = function(req,res)  {
    Interview.findById(req.params.interviewID)
             .exec((error,interview) => {
              if(error)return res.status(404)
                                 .json(error);
              return res.status(200)
                        .json(interview);
             })
             .catch(err => res.status(404)
                            .json(err));
};

const getPodcastByID = function(req,res)  {
    Podcast.findById(req.params.podcastID)
             .exec((error,podcast) => {
              if(error)return res.status(404)
                                 .json(error);
              return res.status(200)
                        .json(podcast);
             })
             .catch(err => res.status(404)
                            .json(err));
};
const getAllInterviews = function(req,res) {
     Interview.find()
            .then(result => {
              return res.status(200)
                        .json(result.reverse());
            })
            .catch(err => res.status(404)
                             .json(err));
};

const getAllPodcasts = function(req,res) {
     Podcast.find()
            .then(result => {
              return res.status(200)
                        .json(result.reverse());
            })
            .catch(err => res.status(404)
                             .json(err));
};

const deleteInterview = function(req,res){
  Interview.findByIdAndRemove(req.params.interviewID)
          .exec((error,interview)=>{
            if(error)return res.status(404)
                               .json(error);
            return res.status(200)
                      .json(null);
          })
}

const deletePodcast = function(req,res){
  Podcast.findByIdAndRemove(req.params.podcastID)
          .exec((error,podcast)=>{
            if(error)return res.status(404)
                               .json(error);
            return res.status(200)
                      .json(null);
          });
}

export { upload,fileUpload,mediaUpload,interviewCreate,interviewUpdate,podcastCreate,podcastUpdate,getPodcastByID,getInterviewByID,getAllInterviews,getAllPodcasts,deleteInterview,deletePodcast };
