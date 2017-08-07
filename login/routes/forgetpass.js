//引入express
var express = require('express');
//引入router路由
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {

    res.render('forgetpass', {title: 'Express'});
})



module.exports = router;
