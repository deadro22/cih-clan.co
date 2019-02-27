var express = require("express");
var nodemailer = require('nodemailer');
var path = require("path");
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

app.use(express.static(__dirname + "/pages"));
app.use(express.static(__dirname + "/styles"));
app.use(express.static(__dirname + "/images"));
app.use(express.static(__dirname + "/javascript"));

app.get("/home",function(req,res){
  res.render(__dirname +"/pages/index.ejs");
});
app.get("/fortnite",function(req,res){
  res.render(__dirname +"/pages/fortnite.ejs");
});
app.get("/ApexLegends",function(req,res){
  res.render(__dirname +"/pages/apex.ejs");
});
app.get("/LeagueOfLegends",function(req,res){
  res.render(__dirname +"/pages/league.ejs");
});
app.get("/Tournaments",function(req,res){
  res.render(__dirname +"/pages/tourns.ejs");
});
app.get("/Members",function(req,res){
  res.render(__dirname +"/pages/members.ejs");
});
app.get("/Contact",function(req,res){
  res.render(__dirname +"/pages/contact.ejs");
});
app.get("*",function(req,res){
  res.render(__dirname +"/pages/error.ejs");
});
app.listen(process.env.PORT || 80, function() {
    console.log("LISTENING!");
});
