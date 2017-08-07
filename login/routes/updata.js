var express = require('express');
var router = express.Router();
//引入mysql依赖
var mysql = require('mysql');
var handleError = require('../public/javascripts/handleError');


//连接数据库需要的参数
var options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '198704',
    database: 'NewB'//连接时直接使用数据库
}
//池子
var pool = mysql.createPool(options)
pool.getConnection(function (error, connect) {
    router.post('/', function (req, res) {
        var password = req.body.affirm;//确认密码
        var oldpassword = req.body.PassWord;//旧密码
        var newpassWord = req.body.newPassWord;//新密码


        var selectUsername = `select * from user where password = '${oldpassword}'`;
        connect.query(selectUsername, function (error, results) {
            if (!handleError('查询', error)) {
                return;
            }
            if (results.length == 0) {
                res.send('密码不正确')
            } else {
                if (newpassWord == password) {
                    //修改数据库
                    var updataSQL = `update user set password=${password}`;
                    connect.query(updataSQL, function (error) {
                        var isSuccess = handleError('修改数据', error);
                        if (!isSuccess) return;
                        res.send('修改成功');
                    });
                } else {
                    res.send('两次输入不一致');
                }
            }
        });


    });

})


module.exports = router;
