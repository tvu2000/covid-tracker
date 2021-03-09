const express = require("express"); 
const bodyPar = require("body-parser"); 
app.use(bodyPar.urlencoded({extended: true}));
const app = express(); 

app.listen(300, function(){
    console.log("Local host 3000")
})

app.get("/", function(req, res){
    
})