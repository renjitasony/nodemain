var express = require("express");
var bodyparser = require("body-parser");
var pdtdetails = {};

const app = express();
app.listen(7890,function(req,res){
  console.log("starting server");  
});
app.set("view engine","ejs");
app.set("views","./src/views");
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.render("home");
});
app.get("/new",function(req,res){    
    res.render("newpdt");
});
app.get("/view",function(req,res){
    res.render("viewpdt");
});
app.get("/remove",function(req,res){
    res.render("removepdt");
});
app.post("/viewadded",function(req,res){
    var pname = req.body.pnam;
    var pprice = req.body.pprice;
    var pqty = req.body.pqty;
    pdtdetails = {nam:pname,price:pprice,qty:pqty};
    res.render("addedpdtdet",{pdcts:pdtdetails});
})