var express = require('express');
var multer = require('multer');
var bodyparser = require('body-parser');

const path = require('path');
const app = express();

app.use(bodyparser.urlencoded({extended:true}));
// var upload = multer({dest:path.join(__dirname,'/public/uploads/')});
var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,'/public/uploads/'));
    },
    filename:function(req,file,cb){
        
        console.log(file.fieldname);
        
        let fileExtns = file.mimetype.split("/").pop();
        console.log(file.mimetype);
        cb(null,file.fieldname+'.'+fileExtns);        
    }
});
var upload = multer({storage:storage});

app.set("view engine","ejs");
app.set("views","./src/views");

app.listen(8321,function(req,res){
    console.log("server started at 8321");
});
app.get("/",function(req,res){
    res.render("home");
});
app.post("/uploaded", upload.single('file'),  function(req,res,next){
    //const filep = req.file;
    // if(!filep){
    //     const err = new Error('Please upload a file');
    
    //     return next(err);
    // }
    console.log("success");
        
    res.sendFile(path.join(__dirname,"./public/uploads/" + req.file.filename));
});
app.get("/download",function(req,res){
    var flpath = path.join(__dirname+"/public/images/image1.jpg");
    var flname = "image1.jpg";
    res.download(flpath);
});