var express=require("express");
var mongoose=require("mongoose");
var cors=require("cors");

var app=express();
app.use(cors());
app.use(express.json());

app.post("/add",(req,res)=>{
    var inp=req.body
    var n1=inp.n1;
    var n2=inp.n2;
    var sum=n1+n2;
    res.json({"result":sum})
})

app.post("/sub",(req,res)=>{
    var inp=req.body
    var n1=inp.n1;
    var n2=inp.n2;
    var sub=n1-n2;
    res.json("result: "+sub)
})

app.post("/mul",(req,res)=>{
    var inp=req.body
    var n1=inp.n1;
    var n2=inp.n2;
    var mul=n1*n2;
    res.send("result: "+mul)
})

app.post("/div",(req,res)=>{
    var inp=req.body
    var n1=inp.n1;
    var n2=inp.n2;
    var div=n1/n2;
    res.json("result: "+div)
})

app.listen(3002,()=>{
    console.log("server started")
})