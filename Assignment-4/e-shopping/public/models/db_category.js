var mongoose = require('mongoose');   

schema = mongoose.Schema({

title : {
type : String, required: true
},

slug : {
type : String, required: true
}

});
 module.exports = mongoose.model('category_database',schema);
