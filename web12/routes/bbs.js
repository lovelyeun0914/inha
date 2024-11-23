var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '게시판', pageName:'bbs/list.ejs' });
});

router.get('/insert', function(req, res, next) {
  res.render('index', { title: '글쓰기', pageName:'bbs/insert.ejs' });
});

router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  console.log('id.....',id);
  res.render('index', { title: '게시글정보', pageName:'bbs/read.ejs', id });
});

router.get('/update/:id', function(req, res, next) {
  const id = req.params.id;
  console.log('id.....',id);
  res.render('index', { title: '게시글수정', pageName:'bbs/update.ejs', id });
});

module.exports = router;
