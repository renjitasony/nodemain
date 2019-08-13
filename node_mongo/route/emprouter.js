var express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
//establish connecttion with db
//giving path
var url ="mongodb://localhost/sdb";
var emp = require('../model/employee');
//connecting
mongoose.connect(url,function(err){
    if(err) throw err
    else{
        console.log("db connected");
    }
});


module.exports = router;

router.use(bodyparser.urlencoded({extended:true}));
router.get('/newemp',function(req,res){
    res.render("newemp");
});
router.get("/view",function(req,res){
    emp.find({},function(err,result){
       if(err) throw err;
       else{
           console.log(result);
        res.render("viewemp",{empdata:result});
       } 
    });    
});
router.post("/add",function(req,res){
    //e1 will have eid,salary...
    var e1 = new emp();
    e1.eid = req.body.eid;
    e1.name = req.body.ename;
    e1.salary = req.body.esal;
    e1.save(function(err){
        if(err) throw err;
        else res.send("data added");
    });
    
});