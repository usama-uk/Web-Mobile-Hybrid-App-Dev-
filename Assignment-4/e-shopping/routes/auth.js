var sexyauth = function(req,res,next){


  if(req.isAuthenticated()){

    next();
  }
  else{

res.redirect('Page-not-found,404');
  }



};

module.exports = sexyauth;
