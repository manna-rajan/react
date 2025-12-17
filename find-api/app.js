var express=require("express");
var mongoose=require("mongoose");
var cors=require("cors");

var app=express();
app.use(cors());
app.use(express.json());

app.post("/largest",(req,res)=>{
    var inp=req.body
    var n1=inp.n1;
    var n2=inp.n2;
    var lg=n1>n2?n1:n2;
    res.json({"result":lg})
})

app.post("/sub",(req,res)=>{
    var inp=req.body
    var n1=inp.n1;
    var n2=inp.n2;
    var sm=n1>n2?n2:n1;
    res.json({"result":sm})
})

app.post("/find",(req,res)=>{
    var inp=req.body
    var n1=inp.n1;
    var oe=n1%2==0?"even":"odd";
    res.json({"result":oe})
})


app.listen(3002,()=>{
    console.log("server started")
})