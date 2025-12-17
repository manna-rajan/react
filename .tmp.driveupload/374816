var express= require("express");
var mongoose =require("mongoose");
var cors =require("cors");

var app = express();
app.use(cors());
app.use(express.json());

const mongoURI = "mongodb+srv://manna:manna@cluster0.lqqm8gv.mongodb.net/car-db?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
 .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

    const carSchema =new mongoose.Schema(
        {
             name:String,
            make: String,
            model: String,
            year: Number,
            price: Number,
            color: String
        }
    )

    const carModel = mongoose.model("car", carSchema);

    app.post("/addcar",(req,res)=>{
    var inp=req.body    
    var car = new carModel(inp);
    car.save();
    console.log(inp)
    res.send("success");
    })
    
    app.post("/getcar",(req,res)=>{
        var result= carModel.find().then(
            (data)=>{res.json(data)}
        ).catch()
    })
    app.listen(3000,()=>{
        console.log("server started")
    })