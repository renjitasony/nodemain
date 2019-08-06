var express = require("express");
var bodyparser = require("body-parser");
//for new router
var prdrouter = require("./routes/prdrouter");
var emprouter = require("./routes/emprouter");

const app = express();
app.listen(1234,function(req,res){
  console.log("starting server");  
});
app.set("view engine","ejs");
app.set("views","./src/views");
app.use(bodyparser.urlencoded({extended:true}));
//for new router
app.use("/prd",prdrouter);
app.use("/emp",emprouter);

app.get("/",function(req,res){
    res.render("home");
    //res.sendFile(__dirname+"/src/views/home.html");
})