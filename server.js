var express = require("express");
var nodemailer = require('nodemailer');
var path = require("path");
var app = express();
var exphs = require("express-handlebars");
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

app.use(express.static(__dirname + "/pages"));
app.use(express.static(__dirname + "/styles"));
app.use(express.static(__dirname + "/images"));
app.use(express.static(__dirname + "/javascript"));
app.engine("handlebars",exphs());
app.set("view engine","handlebars");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/home",function(req,res){
  res.render(__dirname +"/pages/index.ejs");
});
app.get("/",function(req,res){
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
app.post("/success",function(req,res){
  res.render(__dirname +"/pages/sucess.ejs");
  const output = `
    <h1>you got a new message</h1>
    <ul>
    <li><p>from the user: ${req.body.username}</p></li>
    <li><p>his email is: ${req.body.email}</p></li>
    <li><p>and he said: ${req.body.subject}</p></li>
    </ul>
  `;
  // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
         user: 'clancih7@gmail.com',
         pass: 'cihCNT147'
     },tls:{
       rejectUnauthorized: false
     }
 });

 // setup email data with unicode symbols
 let mailOptions = {
   from: '"contact" <'+req.body.email+'>', // sender address
   to: 'clancih7@gmail.com', // list of receivers
   subject: "Contact form", // Subject line
   text: "Hello world?", // plain text body
   html: output // html body
 };
 transporter.sendMail(mailOptions,function(error,info){

 });
});
app.listen(process.env.PORT || 80, function() {
    console.log("LISTENING!");
});
