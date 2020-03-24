var express = require('express');
var router = express.Router();

var meeting = true
/* GET home page. */
router.get('/', function(req, res, next) {
  if (meeting) {
    res.render('notfree', { title: 'Niet storen' });
  }
  else {
    res.render('free', { title: 'Ik ben vrij' }); 
  }
});
router.get('/setstate', function(req, res , next){
  meeting = ! meeting
  res.redirect('/');
});

module.exports = router;
