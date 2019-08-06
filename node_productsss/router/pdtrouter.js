var express = require('express');
var router = express.Router();
var pdtdetails = {};
var pdtlist = [{lname:"P01",lprice:80,lqty:4},
                {lname:"P02",lprice:120,lqty:13},
                {lname:"P03",lprice:200,lqty:9},
                {lname:"P04",lprice:250,lqty:15}];

module.exports = router;

router.get("/new",function(req,res){
    res.render("newpdt");
});
router.get ("/view",function(req,res){
    res.render("viewpdt");
});
router.get("/remove",function(req,res){
    res.render("removepdt");
});
router.post("/viewadded",function(req,res){
    var pname = req.body.pnam;
    var pprice = req.body.pprice;
    var pqty = req.body.pqty;
    pdtdetails = {nam:pname,price:pprice,qty:pqty};
    res.render("addedpdtdet",{pdcts:pdtdetails});
});