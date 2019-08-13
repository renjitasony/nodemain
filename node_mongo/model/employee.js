var mongoose = require('mongoose');

var schema = mongoose.Schema;
var empschema = new schema({
    //eid:String,
    eid:{type:String,required:true},
    name:String,
    salary:Number
});
//third parameter is optional; if not given adds s to fisrst parameter
var empmodel = mongoose.model("employee",empschema);

module.exports = empmodel;