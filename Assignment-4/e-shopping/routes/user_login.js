var express = require('express');
var user_model = require('/Users/asadbilal/Desktop/shoppingcart/public/models/users.js');
var bcrypt = require('bcrypt');
var passport = require('passport');

var app = express();
const saltRounds=10;




//////////////////////////////////////////////////////////////////////////////////////
app.get('/register',function(req,res){
if(req.isAuthenticated()) var boole = true;
else boole = false;

  res.render('../views/layout/register.ejs',{

    name :'',email :'',username :'',password :'',password2 :'',boole:boole,errors:'',boole2:true
  });
});
//////////////////////////////////////////////////////////////////////////////////////
app.post('/register',function(req,res){


  var  name= req.body.name
    var email=req.body.email;
    var username= req.body.username;
    var password =req.body.password;
    var password2 = req.body.password2;
    var boole2=false;
    if(password === password2) {boole2 = true;}
    var admin= 1;
    if(req.isAuthenticated()) var boole = true;
    else boole = false;


    req.checkBody('name','name is empty').notEmpty();
    req.checkBody('email','email is not valid').isEmail();
    req.checkBody('username','username is empty').notEmpty();
    req.checkBody('password','password is empty').notEmpty();
    req.checkBody('password2','password is empty').notEmpty();

    var errors = req.validationErrors();
    if(errors || !boole2){
      res.render('../views/layout/register.ejs',{

        boole:boole,name :name,email :email,username :username,password :password,password2 :password2,boole2:boole2,errors:errors
      });

    }
    else {

      user_model.findOne({username:username},function(err,result){

        if(result) {
       res.redirect('/user/register');

        }
      });

      bcrypt.genSalt(saltRounds, function(err, salt) {
          bcrypt.hash(password, salt, function(err, hash) {

         var user = new user_model({

           name: name,
           email: email,
           username: username,
           password:hash,
           admin:0
         });
         user.save(function(err){
           if(err)return console.log(err);
           else res.redirect('/');
         })

          });
      });


    }




  });

//////////////////////////////////////////////////////////////////////////////////////


app.get('/login',function(req,res,next){


    if(req.user) res.redirect('/'); //req.user is a cookie which will be created when authenticated.
     else next();
});

app.get('/login',function(req,res){


    res.render('../views/layout/mustlogin.ejs',{username:'',password:''}
);
});


//////////////////////////////////////////////////////////////////////////////////////
  app.post('/login' ,passport.authenticate('local', { successRedirect: '/',failureRedirect: '/user/login' }),function(req,res){

});

app.get('/logout',function(req,res){
req.session.cart = [];
  req.logout();

  res.redirect('/');
})






module.exports = app;
