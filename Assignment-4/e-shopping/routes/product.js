var express = require('express');
var page_model = require('/Users/asadbilal/Desktop/shoppingcart/public/models/product.js');
var page_model2 = require('/Users/asadbilal/Desktop/shoppingcart/public/models/db_category.js');

var app = express();
var path = require('path');
var multer = require('multer');

var image_name;


var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, '/Users/asadbilal/Desktop/shoppingcart/public/images')
    },
    filename: (req, file, cb) => {
      image_name = file.fieldname + '-' + Date.now()+'.jpg';
      req.body.img = image_name;

      cb(null,image_name );
    }
});
var upload = multer({storage: storage});






////////////////////////////////////////////////////////////////////////////////////////
app.get('/',function(req,res) {


  var admin;
  if(req.isAuthenticated())  admin = true;
  else admin= false;

  if(admin) {

    page_model.find(function(err,z) {

      res.render('/Users/asadbilal/Desktop/shoppingcart/views/layout/product.ejs',{
        product:z , errors:''
      })


    }) }

  else{
  res.send("Error 404,No page found");
  }











});


////////////////////////////////////////////////////////////////////////////////////////

app.get('/add',function(req,res) {





var admin;
if(req.isAuthenticated())  admin = true;
else admin= false;

if(admin) {


  page_model2.find(function(err,ca) {
    res.render('/Users/asadbilal/Desktop/shoppingcart/views/layout/product_add.ejs'
    , {

      title: '',
      desc: '',
      price : '',
      category: ca,
      errors:'',
      image: ''

    }

   );



  })



 }

else{
res.send("Error 404,No page found");
}



});


///////////////////////////////////////////////////////////////////////////////////


app.post('/add',upload.single('image') ,function(req,res) {



  req.checkBody('title', 'Title must have some value').notEmpty();
  req.checkBody('desc', 'desc must have some value').notEmpty();
  req.checkBody('category', 'category must have some value').notEmpty();
  req.checkBody('price', 'price must have some value').notEmpty();

  var slug = req.body.title.replace(/\s+/g,'-');

  var title = req.body.title.replace(/\s+/g,'-');
  //var slug = req.body.slug;
  var desc = req.body.desc;
  var price = req.body.price;
  var category = req.body.category;
  var img = req.body.img;



  var errors = req.validationErrors();


  if(errors) {

    page_model2.find(function(err,ca) {
      res.render('/Users/asadbilal/Desktop/shoppingcart/views/layout/product_add.ejs'
      , {

        title: title,
        desc: desc,
        price : price,
        category: ca,
        errors:errors

      }

     );



    })
  }


  else {


 var page = new page_model({

  title: title
  ,
  desc: desc
  ,
  price:  price
  ,
  category: category,
  img :img




});

page.save(function(err){

  if (err) return console.log(err);

  else res.redirect('/')
} )





  }

});

//////////////////////////////////////////////////////////////////////////////////

app.get('/edit-product/:somecontent',function(req,ress) {




    var admin;
    if(req.isAuthenticated())  admin = true;
    else admin= false;

    if(admin) {


        var category;
          page_model2.find(function(err,res){

        category = res;

          })


        page_model.findById(req.params.somecontent,function(err,res) {
        var id = req.params.somecontent;


          ress.render('/Users/asadbilal/Desktop/shoppingcart/views/layout/product-edit.ejs'
          , {

            title: res.title,
            desc: res.desc,
            price : res.price,
            category: category,
            errors:'',
            id: id

          }

         );



        })








     }

    else{
    ress.send("Error 404,No page found");
    }




});
//////////////////////////////////////////////////////////////////////////////////
app.post('/edit-product/:somecontent',upload.single('image'),function(req,res) {




  req.checkBody('title','title must have something').notEmpty();
  req.checkBody('price','price must have something').notEmpty();
  req.checkBody('category','category must have something').notEmpty();
  req.checkBody('desc','desc must have something').notEmpty();


  var title = req.body.title;
  var desc = req.body.desc;
    var price = req.body.price ;
  var category = req.body.category;
  var img = image_name;

  var errors = req.validationErrors();


  if(errors) {


    var category;
      page_model2.find(function(err,resx){

        res.render('//Users/asadbilal/Desktop/shoppingcart/views/layout/product-edit.ejs',{
          title: req.body.title,
          desc: req.body.desc,
          price : req.body.price,
          category: resx,
          errors:errors,
          id: req.params.somecontent




        });

  });


  }
  else {


    var resx;
      page_model2.find(function(err,documents){

    resx = documents;

      })

  page_model.findOne({title: req.body.title},function(err,result) {

  if(result ){

   //it already exists

    res.render('/Users/asadbilal/Desktop/shoppingcart/views/layout/product-edit.ejs',{
      title: result.title,
      desc: result.desc,
      price : result.price,
      category: resx,
      errors:'',
      id: req.params.somecontent




    });


  }

  else {


  page_model.findById(req.params.somecontent,function(err,reesult) {

    if(reesult) {

    reesult.title = title;
    reesult.desc = desc
    reesult.price = price;
    reesult.category  =category;
    reesult.img = image_name;

    reesult.save(function(err){

     if(err) return console.log(err);
     else res.redirect('/');


    })


    }


  })






  }


  })

  }



});

//////////////////////////////////////////////////////////////////////////////////



app.get('/delete-product/:somecontent',function(req,res){

  var admin;
  if(req.isAuthenticated())  admin = true;
  else admin= false;

  if(admin) {
    page_model.findByIdAndRemove(req.params.somecontent,function(err){

     if(err) return console.log(err);
     else res.redirect('/admin/product');


    })



   }

  else{
  res.send("Error 404,No page found");
  }












});



//////////////////////////////////////////////////////////////////////////////////

module.exports = app;
