var express = require('express');
var router = express.Router();
var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Smile' });
});

_dirname = process.cwd();
app.use(express.static(_dirname + '/public'))

module.exports = router;
