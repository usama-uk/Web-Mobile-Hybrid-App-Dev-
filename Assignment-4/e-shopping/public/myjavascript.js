Dropzone.options.wtf2 = {  //pasing a new object

accept : function(fuck,fuck2) {

  fuck2('fuckoff');
}


};


$(document).ready(function(){

  $("a").not('#pleasenot').hover(function(){


      $(this).animate({fontSize : "+=30%",},200);


  }, function(){


      $(this).animate({fontSize : "-=30%"},200);


  }

);

$('#product_parent').hover(function(){


  $('#product').slideDown(150);
},
function(){


  $('#product').slideUp(150);
},

);

$('#page_parent').hover(function(){


  $('#page').slideDown(150);

} ,function(){


  $('#page').slideUp(150);

}

);

$('#category_parent').hover(function(){


  $('#category').slideDown(150);
},
function(){


  $('#category').slideUp(150);
},

);



});
