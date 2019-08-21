var express = require('express');
var bodyparser = require("body-parser");
var mongoose = require('mongoose');
var multer = require('multer');
var book = require('./model/book')

var storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(__dirname,'/uploads/'));
    },
    filename:(req,fie,cb)=>{
        cb(null,req.body.btitle+".jpg");
    }
})
var upload = multer({storage:storage});


var url = "mongodb://localhost/mydb1"
//var url = "mongodb+srv://sonyrenjita:mangoHONET@cluster0-sbret.mongodb.net/dummyb?retryWrites=true&w=majority"

const app =express();
//var app = new express();
const chalk = require('chalk');
const path = require('path');

mongoose.connect(url,{useNewUrlParser:true},function(err){
    if(err) throw err
    else{
        console.log("db connected");
    }
})

app.set("view engine","ejs");
app.set("views","./src/views");

app.listen(8001,function(req,res){
    console.log("server started"+chalk.red('8001'));
});
//app.use(express.static(path.join(__dirname,"/public")));
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.render("home");
});
app.get("/viewimg/:image",(req,res)=>{
   res.sendFile(__dirname+"/uploads/"+req.params.image);
});
app.get("/nwbk",(req,res)=>{
    res.render("newbook")
})
app.post("/add",upload.single("bimage"),(req,res)=>{
    var b1 = new book();
    b1.bktitle = req.body.btitle;
    b1.bkimage = req.body.btitle+".jpg";
    b1.save((err)=>{
        if(err) throw err;
        else{
            console.log("added book");
            console.log(req.file.filename);
            res.redirect("/view");
        }
    });
});
app.get("/view",(req,res)=>{
    book.find({},(err,result)=>{
        if(err) throw err;
        else{            
            res.render("viewbooks",{books:result});
        }
    })    
});
app.get("/edit/:image",(req,res)=>{
    book.findOne({bkimage:req.params.image},(err,result)=>{
        if(err) throw err;
        else{
            res.render("editbook",{bk:result});
        }
    })
});
app.post("/update/:image",(req,res)=>{
    book.updateOne({bkimage:req.params.image},{$set:{bktitle:req.body.btitle}},(err,result)=>{
        if(err) throw err;
        else{
            console.log("updated title");
            res.redirect("/view");
        }
    });
});



