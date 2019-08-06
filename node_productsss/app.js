var express = require("express");
var bodyparser = require("body-parser");
var pdtrouter = require("./router/pdtrouter");
var pdtdetails = {};
var pdtlist = [{lname:"P01",lprice:80,lqty:4},
                {lname:"P02",lprice:120,lqty:13},
                {lname:"P03",lprice:200,lqty:9},
                {lname:"P04",lprice:250,lqty:15}];

const app = express();
app.listen(7890,function(req,res){
  console.log("starting server");  
});
app.set("view engine","ejs");
app.set("views","./src/views");
app.use(bodyparser.urlencoded({extended:true}));
app.use("/pdt",pdtrouter);

app.get("/",function(req,res){
    res.render("home");
});
// app.get("/new",function(req,res){    
//     res.render("newpdt");
// });
// app.get("/view",function(req,res){
//     res.render("viewpdt",{pdctlist:pdtlist});
// });
// app.get("/remove",function(req,res){
//     res.render("removepdt");
// });
// app.post("/viewadded",function(req,res){
//     var pname = req.body.pnam;
//     var pprice = req.body.pprice;
//     var pqty = req.body.pqty;
//     pdtdetails = {nam:pname,price:pprice,qty:pqty};
//     res.render("addedpdtdet",{pdcts:pdtdetails});
// })