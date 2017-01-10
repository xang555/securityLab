/**
 * Created by xang on 1/10/2017.
 */

var $ = require('jquery');
var nunjucks =require('nunjucks');

nunjucks.configure('html', { autoescape: true });

$(document).ready(function () {


    if (sessionStorage.getItem('token')) {

        $.ajax('/login',{

            headers :{
                Authorization: 'Bearer '+sessionStorage.getItem('token')
            },
            success:function () {

            }

        });

    }


});