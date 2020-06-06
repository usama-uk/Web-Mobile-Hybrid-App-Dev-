var mongoose = require('mongoose');  //create model here .

schema = mongoose.Schema({

title : {
type : String, required: true
},

slug : {
type : String, required: true
},

content : {
type : String, required: true

},

sorting : {
  type : Number
}

});
module.exports = mongoose.model('page_database',schema);
