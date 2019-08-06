var express = require('express');
const router = express.Router();

module.exports = router;

router.get("/",function(req,res){
    res.render("emps");
});
router.get("/new",function(req,res){
    res.render("newemp");
});
router.get("/new/per",function(req,res){
    res.send("new permanent employee added");
});
router.get("/new/daily",function(req,res){
    res.send("new daily wage employee added");
});
router.get("/view",function(req,res){
    res.send("Employees viewed");
});
router.get("/del",function(req,res){
    res.send("Employees deleted");
});
router.get("/edit",function(req,res){
    res.send("Employees edited");
});