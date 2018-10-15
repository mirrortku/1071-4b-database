var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { id: '404416520', name: 'Chu shih-ming' });
});

module.exports = router;