var express= require("express");
var mongoose =require("mongoose");
var cors =require("cors");

var app = express();
app.use(cors());
app.use(express.json());

const mongoURI = "mongodb+srv://manna:manna@cluster0.lqqm8gv.mongodb.net/food-counter-db?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
 .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

    const counterSchema =new mongoose.Schema(
        {
            customerName:String,
            
                order:  String,
                quantity: Number,
                price:Number,
            status: String, 
            date: Date
        }
    )

    const counterModel = mongoose.model("count", counterSchema);

    app.post("/addcounter",(req,res)=>{
    var inp=req.body    
    var count = new counterModel(inp);
    count.save();
    console.log(inp)
    res.send("success");
    })
    
    app.post("/getcounter",(req,res)=>{
        var result= counterModel.find().then(
            (data)=>{res.json(data)}
        ).catch()
    })
    app.listen(3000,()=>{
        console.log("server started")
    })