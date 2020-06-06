var express = require('express');

var router2 = express();
var page_model = require('E:/Web Dev and Hybrid Mob App/Usama-Khalid/Web&Mobile Hybrid Application/Assignment-4/e-shopping/public/models/db_table.js');

router2.get('/',function(req,res,next) {

var admin;
if(req.isAuthenticated())  admin = true;
else admin= false;

if(admin) {
res.render('layout/admin_main.ejs',{

  title: '',
  slug: '',
  content: '',
  errors:'',


}); }

else{
res.send("Error 404,No page found");
}


});
/////////////////////////////////////////////////////////////////////////////////////




router2.get('/pages/delete-page/:somecontent',function(req,res) {


  var admin;
  if(req.isAuthenticated())  admin = true;
  else admin= false;

  if(admin) {
    page_model.findByIdAndRemove(req.params.somecontent, function(err) {

    if(err) return console.log(err);
    else res.redirect('/admin/pages');


    }) }

  else{
  res.send("Error 404,No page found");
  }

});



/////////////////////////////////////////////////////////////////////////////////////
router2.get('/pages/edit-page/:slug',function(req,res) {




  var admin;
  if(req.isAuthenticated())  admin = true;
  else admin= false;

  if(admin) {

    page_model.findOne({slug: req.params.slug},function(err,result ){

     if(result) {



         res.render('layout/edit-page.ejs',{
          title : result.title,
          slug : result.slug,
          content : result.content,
          id : result._id,
          errors:''

         })




     }
     else {
       res.send('Bye')
     }

    });




 }

  else{
  res.send("Error 404,No page found");
  }



});
/////////////////////////////////////////////////////////////////////////////////////

router2.post('/pages/edit-page/:slug',function(req,res) {



  req.checkBody('title', 'Title must have some value').notEmpty();
  req.checkBody('content', 'Content must have some value').notEmpty();
  req.checkBody('slug', 'slug  must have some value').notEmpty();
  var slug = req.body.slug.replace(/\s+/g,'-');

  var title = req.body.title.replace(/\s+/g,'-');
  //var slug = req.body.slug;
  var content = req.body.content;

  var id = req.body.id;


  var errors = req.validationErrors();


  if(errors) {
  res.render('E:/Web Dev and Hybrid Mob App/Usama-Khalid/Web&Mobile Hybrid Application/Assignment-4/e-shopping/views/layout/edit-page.ejs', {

  errors: errors,
  title: title,
  slug: slug,
  content: content,
  id: id


  });


  }
  else {

page_model.findOne({slug: slug , _id:{'$ne':id}},function(err,result) {

if(result) {

res.send("Sorry that entry is already taken.");

}

else {


page_model.findById(id, function( err,result) {

if(err) return console.log(err);
result.title = title;
result.slug = slug;
result.content = content;
result.save(function(err) {

  if(err) console.log(err);
  else res.redirect('/admin');

});


}); } }

); }   });

/////////////////////////////////////////////////////////////////////////////////////
router2.get('/pages',function(req,res) {





var admin;
if(req.isAuthenticated())  admin = true;
else admin= false;

if(admin) {
  page_model.find({}).sort({sorting : 1}).exec( function(err,result) {

  res.render('/Users/asadbilal/Desktop/shoppingcart/views/layout/pages.ejs',{
  page : result,
  title: '',
  slug: '',
  content: '',
  errors:''


  })


}); }

else{
res.send("Error 404,No page found");
}


});


/////////////////////////////////////////////////////////////////////////////////////
router2.get('/pages/add-page',function(req,res) {





var admin;
if(req.isAuthenticated())  admin = true;
else admin= false;

if(admin) {

  res.render('/Users/asadbilal/Desktop/shoppingcart/views/layout/admin_addpage.ejs'
  , {

    title: '',
    slug: '',
    content: '',
    errors:''

  }

  );



 }

else{
res.send("Error 404,No page found");
}
});

/////////////////////////////////////////////////////////////////////////////////////
router2.post('/pages/add-page',function(req,res) {

req.checkBody('title', 'Title must have some value').notEmpty();
req.checkBody('content', 'Content must have some value').notEmpty();

var slug = req.body.slug.replace(/\s+/g,'-');

var title = req.body.title.replace(/\s+/g,'-');
//var slug = req.body.slug;
var content = req.body.content;

var errors = req.validationErrors();


if(errors) {
res.render('/Users/asadbilal/Desktop/shoppingcart/views/layout/admin_addpage.ejs', {

errors: errors,
title: title,
slug: slug,
content: content


});


}
else {

  page_model.findOne( {slug : slug}  , function(err,result) {
if(result) {
 console.log('error!');
 res.render('/Users/asadbilal/Desktop/shoppingcart/views/layout/admin_addpage.ejs', {

 errors: errors,
 title: title,
 slug: slug,
 content: content


 });
}
else {
    var page = new page_model(
{
  title: title,
  slug: slug,
  content: content,
  sorting : 100 });

  page.save(function(err) {
    if(err) console.log(err);
    else res.redirect('/');
  });
}
});

}

});





module.exports = router2;
