/**
 * Created by xang on 1/10/2017.
 */
var express = require('express');
var jwt =require('jsonwebtoken');
var config =require('../appconfig');
var Auth =require('./checkAuth');

var router = express.Router();

router.get('/',Auth(),function (req, res, next) {

    res.json({
        user:'admin',
        state:'admin',
        password:'55765567'
    });

});


router.post('/login',function (req,res,next) {

    if (req.body.uname == config.users.user && req.body.passwd == config.users.password){

        var payload = {
            user:'admin',
            admin:true
        };

        jwt.sign(payload,config.secret,{expiresIn:24*60*60},function (err, token) {
            if (err){
                return console.error(err);
            }

            res.json({
                state:'ok',
                token:token
            });

        });

    }else {

        res.json({
            state:'no',
            token:''
        });

    }

});


module.exports = router;