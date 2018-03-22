var express = require("express");
var app = express();

app.use(express.static("views")); // Allow access to views folder
app.use(express.static("scripts")); // Allow access to scripts folder
app.use(express.static("images")); // Allow access to images folder



app.get('/', function(req, res){
  res.render("index.jade"); 
  console.log("Hello World"); 
});

app.get('/index', function(req, res){
  res.render("index.jade"); 
  console.log("Hello World"); 
});

app.get('/staff', function(req, res){
  res.render("staff.jade"); 
  console.log("Staff page is now rendered"); 
});

app.get('/services', function(req, res){
  res.render("services.jade"); 
  console.log("Staff page is now rendered"); 
});

app.get('/academic', function(req, res){
  res.render("academic.jade"); 
  console.log("Academic Section page is now rendered"); 
});




app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  console.log("It's running!");
});