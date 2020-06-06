var express = require('express');

var router2 = express();
var page_model = require('E:/Web Dev and Hybrid Mob App/Usama-Khalid/Web&Mobile Hybrid Application/Assignment-4/e-shopping/public/models/db_category.js');
var auth = require('../routes/auth.js');


/////////////////////////////////////////////////////////////////////////////////////////////
router2.get('/',auth,function(req,res) {

  page_model.find({},function(err,ress) {
    if(req.user) {
      if(req.user.admin == 1) {
        boole = true;
      }

    }
    else {
      boole = false;

    }

 res.render('E:/Web Dev and Hybrid Mob App/Usama-Khalid/Web&Mobile Hybrid Application/Assignment-4/e-shopping//views/layout/category-table.ejs',

 {errors:'',page:ress,  boole : boole}

)
 ;
  })


});

/////////////////////////////////////////////////////////////////////////////////////////////

router2.get('/add',function(req,res) {
  if(req.user) {
    if(req.user.admin == 1) {

      res.render('layout/add-category.ejs' , {

        errors: '',title :''

      });
    }

  }
  else {
    res.send('page Not Found,404')
  }


});

/////////////////////////////////////////////////////////////////////////////////////////////


router2.post('/add',function(req,res) {

req.checkBody('title', 'Title must have some value').notEmpty();  //express validator in hands?

var error = req.validationErrors();
if(error) {

  res.render('layout/category.ejs' , {

    errors: error,title : req.body.title

  });

}
else {

var slug =  req.body.title.replace(/\s+/,'-');
  var page = new page_model(
 {

 title: req.body.title,
 slug : slug


  });

 page.save(function(err) {
   if(err) console.log(err);
   else res.redirect('/categories');
 });
}


});
/*  */




//////////////////////////////////////////////////////////////////////////////////////
router2.get('/edit-page/:slug',function(req,res) {

  page_model.findOne({slug: req.params.slug},function(err,result) {


if(result) {
  if(req.user) {
    if(req.user.admin == 1) {
      boole = true;
    }

  }
  else {
    boole = false;

  }

  res.render('E:/Web Dev and Hybrid Mob App/Usama-Khalid/Web&Mobile Hybrid Application/Assignment-4/e-shopping/views/layout/editcategory.ejs', {



    title :result.title , errors :'',
    id : result._id , slug: result.slug,boole:boole

  } );


}




else res.send("sorry");



});
});


/////////////////////////////////////////////////////////////////////////////////////

router2.post('/edit-page/:slug',function(req,res) {

  req.checkBody('title', 'Title must have some value,lol').notEmpty();


  var slug = req.body.title.replace(/\s+/g,'-');

  var title = req.body.title;
  var id = req.body.id;
  console.log(id);
  var errors = req.validationErrors();
if(errors) {
    res.render('layout/category.ejs' , {

      errors: errors,title :title

    });
  }

else {

page_model.findOne({slug: slug},function(err,result) {

if(result) {

  res.send("sorry already taken.HAHAH");
}
else {


  page_model.findById(id, function( err,result) {

  if(err) return console.log(err);
  result.title = title;
  result.slug = slug;

  result.save(function(err) {

    if(err) console.log(err);
    else res.redirect('/admin');

  }); });








}

});



 }

});


/////////////////////////////////////////////////////////////////////////////////////


router2.get('/delete-page/:slug',function(req,res) {


  page_model.findByIdAndRemove(req.params.slug, function(err) { //MODEL THE RESCUE!

    if(err) return console.log(err);
    else res.redirect('/categories');
  })

});

/////////////////////////////////////////////////////////////////////////////////////



router2.get('/pages/delete-page/:somecontent',function(req,res) {

  page_model.findByIdAndRemove(req.params.somecontent, function(err) {

  if(err) return console.log(err);
  else res.redirect('/admin/pages');


  })




});



/////////////////////////////////////////////////////////////////////////////////////
router2.get('/pages/edit-page/:slug',function(req,res) {

  page_model.findOne({slug: req.params.slug},function(err,result ){

   if(result) {

     if(req.user) {
       if(req.user.admin == 1) {
         boole = true;
       }

     }
     else {
       boole = false;

     }


       res.render('layout/edit-page.ejs',{
        title : result.title,
        slug : result.slug,
        content : result.content,
        id : result._id,
        errors:'',boole:boole

       })




   }
   else {
     res.send('Bye')
   }

  });


});
/////////////////////////////////////////////////////////////////////////////////////

router2.post('/pages/edit-page/:slug',function(req,res) {



  req.checkBody('title', 'Title must have some value').notEmpty();
  req.checkBody('content', 'Content must have some value').notEmpty();

  var slug = req.body.slug.replace(/\s+/g,'-');

  var title = req.body.title.replace(/\s+/g,'-');
  //var slug = req.body.slug;
  var content = req.body.content;

  var id = req.body.id;


  var errors = req.validationErrors();


  if(errors) {
  res.render('/Users/asadbilal/Desktop/shoppingcart/views/layout/edit-page.ejs', {

  errors: errors,
  title: title,
  slug: slug,
  content: content,
  id: id


  });


  }
  else {
    console.log("???wtf");

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

  page_model.find({}).sort({sorting : 1}).exec( function(err,result) {
    if(req.user) {
      if(req.user.admin == 1) {
        boole = true;
      }

    }
    else {
      boole = false;

    }

  res.render('C:/Users//UK/Downloads/Compressed/Dummy_daraz-master/views/layout/pages.ejs',{
  page : result,
  title: '',
  slug: '',
  content: '',
  errors:'',boole:boole


  })


});

});


/////////////////////////////////////////////////////////////////////////////////////
router2.get('/pages/add-page',function(req,res) {
  if(req.user) {
    if(req.user.admin == 1) {
      boole = true;
    }

  }
  else {
    boole = false;

  }

res.render('C:/Users//UK/Downloads/Compressed/Dummy_daraz-master/views/layout/admin_addpage.ejs'
, {

  title: '',
  slug: '',
  content: '',
  errors:'',boole:boole

}

)
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
res.render('C:/Users//UK/Downloads/Compressed/Dummy_daraz-master/views/layout/admin_addpage.ejs', {

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
 res.render('C:/Users//UK/Downloads/Compressed/Dummy_daraz-master/views/layout/admin_addpage.ejs', {

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
