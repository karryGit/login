//引入express
var express = require('express');
//引入router路由
var router = express.Router();
var mysql = require('mysql');
var handleError = require('../public/javascripts/handleError');

var options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '198704',
    database: 'NewB'//连接时直接使用数据库
};
//池子
var pool = mysql.createPool(options)
//查询数据库
pool.getConnection(function (error, connection) {
    router.post('/', function (req, res) {
        var username = req.body.userName;
        var password = req.body.passWord;
        var selectUsername = `select * from user where username = '${username}'`;
        console.log(selectUsername);
        connection.query(selectUsername, function (error,results) {
            if (!handleError('查询', error)) {
                return;
            }
            if (results.length !== 0) {
                var user = results[0]
                if (user.password === password) {
                    res.send('登录成功')
                } else {
                    res.send('密码错误')
                }
            } else {
                res.send('用户不存在')
            }
        })

    })
})


module.exports = router;
