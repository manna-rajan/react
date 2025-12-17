var express= require("express");
var mongoose =require("mongoose");
var cors =require("cors");

var app = express();
app.use(cors());
app.use(express.json());

const mongoURI = "mongodb+srv://manna:manna@cluster0.lqqm8gv.mongodb.net/bike-db?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
 .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

    const bikeSchema =new mongoose.Schema(
        {
            name: String,
            brand: String,
            model: String,
            type: String,
            price: Number,
            color: String
        }
    )

    const bikeModel = mongoose.model("bike", bikeSchema);

    app.post("/addbike",(req,res)=>{
    var inp=req.body    
    var bike = new bikeModel(inp);
    bike.save();
    console.log(inp)
    res.send("success");
    })
    
    app.post("/getbike",(req,res)=>{
        var res= bikeModel.find().then(
            (data)=>{res.json(data)}
        ).catch()
    })
    app.listen(3000,()=>{
        console.log("server started")
    })