var express = require("express");
var bodyparser = require('body-parser');
const app = express();
// var book_array = ["abcd","efgh" ,"ijkl"];
var book_array = [{name:"Book1",Author:"Author1",Price:10},{name:"Book2",Author:"Author2",Price:20},{name:"Book3",Author:"Author3",Price:30}]
app.set("view engine","ejs");
app.set("views","./src/views");
app.use(bodyparser.urlencoded({extended:true}));
app.listen(7865,function(req,res){
  console.log("starting server");  
})
app.get("/",function(req,res){
    // res.sendFile(__dirname+"/src/views/login.html");
    //when ejs is used, use render instead of sendfile
    res.render("login");
})
app.post("/home",function(req,res){
  var pwd = req.body.upwd;
  var username = req.body.uname;
  if(pwd == "@123"){
    // res.sendFile(__dirname+"/src/views/home.html");
    res.render("home",{user:username});
  }else{
    // res.sendFile(__dirname+"/src/views/login.html");
    res.redirect("/");
  }
    console.log(username);
   
});
app.get("/book",function(req,res){
  res.render("book",{books:book_array});
})