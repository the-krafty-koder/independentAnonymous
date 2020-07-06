import express from 'express';

let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/editor', function(req, res, next) {
  res.render('editor', { title: 'Text editor' });
});

export default router;
