/**
 * Created by xang on 1/10/2017.
 */

var jwt =require('jsonwebtoken');
var conf =require('../appconfig');

function JWTAuth() {

    return function (req, res, next) {

        console.log(req.get('Authorization'));

        if (req.get('Authorization')){

            jwt.verify(req.get('Authorization').substring('Bearer '.length,req.get('Authorization').length),conf.secret,function (err,decode) {

                console.log('in check'+decode);

                if (err){
                    console.error(err);
                  return  res.send('who are you!?');
                }


                try {
                    if (!decode.user){
                        res.status = 401;
                       return res.json({
                           error:'you can not access this rout'
                       });
                    }
                }catch (e){
                    res.status =401;
                    return res.json({
                        error:'you can not access this rout'
                    });
                }

                next();

            });

        } else {
            res.status =401;
            return res.json({
                error:'you can not access this rout'
            });
        }

    }

}


module.exports = JWTAuth;