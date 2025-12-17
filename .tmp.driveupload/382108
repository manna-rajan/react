var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');

var app = express();
app.use(cors());
app.use(express.json());
const mongoURI = "mongodb+srv://manna:manna@cluster0.lqqm8gv.mongodb.net/fund-raiser-db?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
 .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

    const fundSchema= new mongoose.Schema(
        {
            name: String,
            description: String,
            goal: Number,
            raised: Number,
            endDate: Date
        }
    )

    const fundModel = mongoose.model("fund", fundSchema);

    app.post("/addfund",(req,res)=>{
    var inp=req.body    
    var fund = new fundModel(inp);
    fund.save();
    console.log(inp)
    res.send("success");
    })
    
    app.post("/viewfund",(req,res)=>{
        var result= fundModel.find().then(
            (data)=>{res.json(data)}
        ).catch()
    })
    app.listen(3000,()=>{
        console.log("server started")
    })