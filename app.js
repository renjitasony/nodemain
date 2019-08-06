var express = require("express");
var bodyparser = require('body-parser');
const app = express();
app.listen(7890,function(req,res){
  console.log("starting server");  
})
app.get("/",function(req,res){
    res.sendFile(__dirname+"/src/views/login.html");
})
app.get("/home",function(req,res){
    console.log(req.body.uname);
    res.sendFile(__dirname+"/src/views/home.html");
});