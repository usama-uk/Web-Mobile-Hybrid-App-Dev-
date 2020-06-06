var express = require('express');

var model = require('E:/Web Dev and Hybrid Mob App/Usama-Khalid/Web&Mobile Hybrid Application/Assignment-4/e-shopping/public/models/product.js');

var router = express.Router();

var multer = require('multer');




var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'E:/Web Dev and Hybrid Mob App/Usama-Khalid/Web&Mobile Hybrid Application/Assignment-4/e-shopping/public/images')
    },
    filename: (req, file, cb) => {
      var image_name =  Date.now()+'.jpg';

      cb(null,image_name );
    }
});
var upload = multer({storage: storage});

////////////////////////////////////////////////////////////////////////////////////

router.get('/product-details/:somecontent',function(req,res) {

  model.findOne({title : req.params.somecontent},function(err,page){
  if(err) return console.log(err);
  else {
    var boole = req.isAuthenticated() ==true ? true : false;
    var admin;
    if(req.user) if(req.user.admin == 1)admin = true;
    else admin = false;
    res.render('../views/layout/product-details.ejs',{

      errors :'',product : page,boole: boole,admin: admin,name:req.user
    })

  }


  })


});



////////////////////////////////////////////////////////////////////////////////////




router.get('/',function(req,res) {
  var boole = req.isAuthenticated() ==true ? true : false;
  var admin;
  if(req.user) if(req.user.admin == 1)admin = true;
  else admin = false;


res.render('../views/layout/index.ejs',{errors:'',boole: boole,admin: admin,name:req.user});


});



////////////////////////////////////////////////////////////////////////////////////


router.get('/filter/:somecontent',function(req,ress) {

  model.find({category : req.params.somecontent},function(err,res){

    if(err) return console.log(err);


   else {
     var boole = req.isAuthenticated() ==true ? true : false;
     var admin;
     if(req.user) if(req.user.admin == 1)admin = true;
     else admin = false;
    ress.render('E:/Web Dev and Hybrid Mob App/Usama-Khalid/Web&Mobile Hybrid Application/Assignment-4/e-shopping/views/layout/display_product.ejs',

    { asad : res,errors:'',boole: boole,admin: admin,name:req.user}

  );

   }





 });
});


////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////

module.exports = router;
