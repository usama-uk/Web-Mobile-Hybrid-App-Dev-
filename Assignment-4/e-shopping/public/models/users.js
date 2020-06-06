var mongoose = require('mongoose');

var schema = mongoose.Schema({

 name: {   type : String, required : true

 },
 email: { type : String, required : true

 },
 username: {type : String, required : true

 },
 password: { type : String, required : true

 },
 admin: { type : Number, required : true

 }


});
 module.exports = mongoose.model('user_database',schema);
