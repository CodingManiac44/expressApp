var express=require('express');
app=express();

app.get("/",function(req,res){
res.send("hello express js");
});
app.get("/one",function(req,res){
res.send("get express js");
});
app.post("/two",function(req,res){
res.send("post req home page");
});
app.put("/three",function(req,res){
res.send("put page");
});

app.delete("/four",function(req,res){
res.send("delete page");
});

app.patch("/five",function(req,res){
res.send("patch page");
});



app.get("/three",function(req,res){
res.send("get req home page");
});

app.listen(9000,function(){
console.log("watever");
})