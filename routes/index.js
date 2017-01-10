var express = require('express');
var jwt =require('jsonwebtoken');
var config =require('../appconfig');
var Auth =require('./checkAuth');

var router = express.Router();

/* GET home page. */
router.get('/',Auth(), function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login',function (req, res, next) {

  res.render('login',{login:true})

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
