var express = require('express');
var emprouter = require('./route/emprouter');

const app= express();

app.set("view engine","ejs");
app.set("views","./src/views");

app.use("/emp",emprouter);
app.listen(7631,function(req,res){
    console.log("At 7631");
})
app.get("/",function(req,res){
    res.render("home");
});