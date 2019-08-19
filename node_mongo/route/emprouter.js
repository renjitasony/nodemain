var express = require('express');
var searchable = require("mongoose-regex-search");
const router = express.Router();

var mongoose = require('mongoose');
var bodyparser = require('body-parser');
//establish connecttion with db
//giving path
var url ="mongodb://localhost/sdb";
//var url = "mongodb+srv://renjitasony:mangoHONET@cluster0-y18tu.mongodb.net/test?retryWrites=true&w=majority"

var emp = require('../model/employee');
//connecting
mongoose.connect(url,{useNewUrlParser:true},function(err){
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
        else res.redirect("/emp/view");
    });
    
});
router.get("/edit/:id",function(req,res){
    var pdctId = req.params.id;
    emp.find({eid:pdctId},function(err,result){
        if(err) throw err;
        else{
            res.render("viewdetail",{empdata:result});
        }
    });
});
router.post("/update/:id",function(req,res){
    var pdctId = req.params.id;
    var newId = req.body.eid;
    var ename = req.body.ename;
    var esal = req.body.esal;
    emp.update({eid:pdctId},{$set:{eid:newId,name:ename,salary:esal}},function(err,result){
        if(err) throw err;
        else{
            console.log("updated")
            res.redirect("/emp/view");
        }
    });
});
router.get("/delete/:id",function(req,res){
    emp.deleteOne({eid:req.params.id},(err)=>{
        if(err) throw err;
        else{
            console.log("Deleted");
            res.redirect("/emp/view");
        }
    });
});
router.post("/search",function(req,res){
    var searchText = req.body.searchemp;
    emp.find({$text:{$search:searchText}},function(err,result){
        if(err) throw err;
        else{
            console.log(result);
            res.render("viewemp",{empdata:result});
        }
    });
});