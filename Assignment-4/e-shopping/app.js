var express = require('express');  //main 
var path = require('path');  //for directory path.join

var mongoose = require('mongoose');  //connects database-mongo with node & express

var router = require('E:/Web Dev and Hybrid Mob App/Usama-Khalid/Web&Mobile Hybrid Application/Assignment-4/e-shopping/routes/page.js'); //simple connecting to route

var router2= require('E:/Web Dev and Hybrid Mob App/Usama-Khalid/Web&Mobile Hybrid Application/Assignment-4/e-shopping/routes/admin_page.js');  
//simple connecting to route
var router3 = require('E:/Web Dev and Hybrid Mob App/Usama-Khalid/Web&Mobile Hybrid Application/Assignment-4/e-shopping/routes/admin_category.js');  //simple connecting to route
var testroute = require('E:/Web Dev and Hybrid Mob App/Usama-Khalid/Web&Mobile Hybrid Application/Assignment-4/e-shopping/routes/product.js');  //simple connecting to route
var session = require('express-session');  //uses for session
var express_v = require('express-validator');  //uses for post-validation.
var page_model = require('E:/Web Dev and Hybrid Mob App/Usama-Khalid/Web&Mobile Hybrid Application/Assignment-4/e-shopping/public/models/db_category.js');
var page_model2 = require('E:/Web Dev and Hybrid Mob App/Usama-Khalid/Web&Mobile Hybrid Application/Assignment-4/e-shopping/public/models/product.js');
var arsenal = require('E:/Web Dev and Hybrid Mob App/Usama-Khalid/Web&Mobile Hybrid Application/Assignment-4/e-shopping/routes/cart.js');
var bcrypt = require('bcrypt');
var passport = require('passport');
var user_model = require('E:/Web Dev and Hybrid Mob App/Usama-Khalid/Web&Mobile Hybrid Application/Assignment-4/e-shopping/public/models/users.js');
var bodyParser = require('body-parser');


var app = express();   //uses express


app.use(session({
  secret: 'keyboard',
  resave: true,
  saveUninitialized: true,

}));

//////////PASSSPORTTTTTTT/////////////////////////////////////////////////////////////
app.use(passport.initialize());  //order matter krta hai
app.use(passport.session());
var LocalStrategy = require('passport-local');

passport.use(new LocalStrategy(// telling passport that we will use local strategy db.

  function(username, password, done) {   //cases 1) incorrect username or db error or incorrect password

    user_model.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      bcrypt.compare(password,user.password,function(err,result){
        if(!result) {done(null,false,{message: 'Incorrect password'}); }
        else {
          return done(null, user);
        }
      });

    });
  }

));

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  user_model.findById(id, function(err, user) {
    done(err, user);
  });
});

////////////////////////////////////////////////////////////////////////////////////





















 //connection db to server
app.use(express.static(path.join(__dirname,'public')));
//set the general folder
app.use(express_v());   //app.use set to the express validator



//app.use basically used for middleware.

  //acts as the middle ware  between client and server.
app.use(bodyParser.urlencoded({ extended: false }));    //main janaymaannn!!!!!!
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/cmscart');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("JAAANI SCENE ON HAI");
});





//setup the engine which here is ejs
app.set('views' ,path.join(__dirname,'views'));
app.set('view engine' ,'ejs');


app.get('*',function(req,res,next) {  //ORDERS MATTER HERE,,YOU GOTTA PUT THIS SHIT BEFORE ALL ROUTES AND THIS WILL INVOKE BEFORE ANY GET!

if(!req.session.cart) req.session.cart = [];
 app.locals.cart = req.session.cart;



 //next is going to continue whatever you where browsing lkin ye bc chalay ga har sorut whenever get invokes
next();
});

var user_login = require('E:/Web Dev and Hybrid Mob App/Usama-Khalid/Web&Mobile Hybrid Application/Assignment-4/e-shopping/routes/user_login.js');

app.use('/',router);
app.use('/admin',router2);
app.use('/categories',router3);
app.use('/admin/product',testroute);
app.use('/cart',arsenal);
app.use('/user',user_login);




page_model.find({},function(err,result) {


  app.locals.category = result;
});

page_model2.find({},function(err,result) {


  app.locals.product = result;
});

app.locals.count = 1;












app.listen(3000);
