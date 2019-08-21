var mongoose = require('mongoose');
var schema = mongoose.Schema;
var bkschema = new schema({
    bktitle:{type:String,required:true},        
    bkimage:String
});

var bkmodel = mongoose.model("book",bkschema,"books");
module.exports = bkmodel;