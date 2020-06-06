var mongoose = require('mongoose');

var schema = mongoose.Schema({

 title : { type : String, required: true

 },
 desc : { type : String, required: true

 },img : { type : String, required: true

 },price : { type : Number, required: true

 },category : { type : String, required: true

 },


});

module.exports = mongoose.model('product_database',schema);
