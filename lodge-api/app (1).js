var express= require("express");
var mongoose =require("mongoose");
var cors =require("cors");

var app = express();
app.use(cors());
app.use(express.json());

const mongoURI = "mongodb+srv://manna:manna@cluster0.lqqm8gv.mongodb.net/lodge-db?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
 .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

    const lodgeSchema =new mongoose.Schema(
        {
              name:String, 
            location: String,
            pricePerNight: Number,
            capacity: Number, 
            rating: Number,
            isAvailable: Boolean
        }
    )

    const lodgeModel = mongoose.model("lodge", lodgeSchema);

    app.post("/addlodge",(req,res)=>{
    var inp=req.body    
    var lodge = new lodgeModel(inp);
    lodge.save();
    console.log(inp)
    res.send("success");
    })
    
    app.post("/getlodge",(req,res)=>{
        var res= lodgeModel.find().then(
            (data)=>{res.json(data)}
        ).catch()
    })
    app.listen(3000,()=>{
        console.log("server started")
    })