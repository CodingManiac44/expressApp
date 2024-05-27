var express=require('express');

app=express();

app.get("/",function(req,res){
res.send("hello express js");
});

app.get("/home",function(req,res){
res.send("home page");
});

app.post("/about",function(req,res){
res.send("about page");
});

app.put("/terms",function(req,res){
res.send("about page");
});

app.delete("/terms",function(req,res){
res.send("about page");
});



app.listen(8000,function(){
console.log("watever");
})