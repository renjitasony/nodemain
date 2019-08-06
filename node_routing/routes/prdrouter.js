var express = require('express');
const router = express.Router();
//no need to view engine again in router after setting in app
module.exports = router;

router.get("/",function(req,res){
    res.render("prds");
    // res.sendfile(__dirname+'../src/views/prds.html');
    //res.sendFile(__dirname+'/prds.html');
});
router.get("/new",function(req,res){
    res.render("newprd");   
});
router.get("/view",function(req,res){
    res.send("products viewed");
});
router.get("/del",function(req,res){
    res.send("products deleted");
});
router.get("/edit",function(req,res){
    res.send("products edited");
});
router.get("/new/ret",function(req,res){
    res.send("new retail product added");
});
router.get("/new/whole",function(req,res){
    res.send("new wholesale product added");
});