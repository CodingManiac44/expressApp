var express=require('express');
app=express();

app.get("/",function(req,res){
res.send("hello express js");
});
app.get("/unath",function(req,res){
res.status(401).end("unath");
});

app.get("/jsondata",function(req,res){
  let myJsonArray=[
    {
      name:"sabbir",
      city:"dhaka"
    },
    {
      name:"sabbir",
      city:"dhaka"
    }
  ]
res.json(myJsonArray);
});
app.get("/one",function(req,res){
    res.send("get js");
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
app.get("/threeRes",function(req,res){

    res.end("this is a string");

});

// app.get("/threeCode",function(req,res){
//     res.status(401).end("Unathorized");
// });


app.listen(9000,function(){
console.log("watever");
})
