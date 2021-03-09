const express = require("express"); 
const bodyPar = require("body-parser"); 
const app = express(); 
const ejs = require("ejs"); 
app.set('view engine', 'ejs');
app.use(express.static("public")); 

app.use(bodyPar.urlencoded({extended: true}));

app.listen(300, function(){
    console.log("Local host 300");
})

app.get("/", function(req, res){
    res.render("home-page.ejs"); 
})

app.get("/tweet", function(req, res){
    res.render("tweet.ejs"); 
})

app.get("/US", function(req, res){
    res.render("tweet.ejs"); 
})

app.get("/vaccine", function(req, res){
    res.render("tweet.ejs"); 
})