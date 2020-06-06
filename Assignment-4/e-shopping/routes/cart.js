var express = require('express');
var app = express();
var auth = require('../routes/auth.js');

var product_model = require('/Users/asadbilal/Desktop/shoppingcart/public/models/product.js');
var category_model = require('/Users/asadbilal/Desktop/shoppingcart/public/models/db_category.js');



app.get("/:somecontent",auth, function(request, response, next){

var session_cart = request.session.cart;
var product = request.params.somecontent;

var zinda = false;
var c;


product_model.findOne({title: product} ,function(err,ress){

if (err) return console.log(err);
else {


  if( typeof request.session.cart == 'undefined') {
      request.session.cart = [];
      request.session.cart.push({
       title: product,
       price : ress.price,
       img : ress.img,
       qty: 1
    }  );
    response.redirect('/');
  }

  else{

    for(var i=0; i<request.session.cart.length; i++){

      if(request.session.cart[i].title == product){
        zinda = true; c = i;
      }
    }
    if(zinda) {

       request.session.cart[c].qty++;

    }
    else {
      request.session.cart.push({
       title: product,
       price : ress.price,
       img : ress.img,
       qty: 1
    }  );


    }


    response.redirect('/');

  }




}

});









});

app.get('/final/checkout',function(req,res){

  var boole = req.isAuthenticated()== true ? true : false;

  category_model.find({},function(err,category) {
    res.render('../views/layout/checkout.ejs',{
     errors : '', category : category,total :0,
     productbuying: req.session.cart,cart:req.session.cart,boole : boole,name:req.user

    });


  })



});




app.get('/sortminus/:somecontent',function(req,res){

var product = req.params.somecontent;

for(var i=0; i<req.session.cart.length; i++){

  if( product == req.session.cart[i].title) {

    req.session.cart[i].qty--;
    break;
  }
}
res.redirect('/cart/final/checkout');
});

app.get('/sortplus/:somecontent',function(req,res){

var product = req.params.somecontent;

for(var i=0; i<req.session.cart.length; i++){

  if( product == req.session.cart[i].title) {

    req.session.cart[i].qty++;
    break;
  }
}
res.redirect('/cart/final/checkout');
});


app.get('/sortdestroy/:somecontent',function(req,res){

var product = req.params.somecontent;

for(var i=0; i<req.session.cart.length; i++){

  if( product == req.session.cart[i].title) {


    req.session.cart.splice(i,1);
    break;
  }
}
res.redirect('/cart/final/checkout');
});



  module.exports = app;
