var express= require("express");
var mongoose =require("mongoose");
var cors =require("cors");

var app = express();
app.use(cors());
app.use(express.json());

const mongoURI = "mongodb+srv://manna:manna@cluster0.lqqm8gv.mongodb.net/food-db?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
 .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

    const foodSchema =new mongoose.Schema(
        {
            name:String,
            calories:Number,
            protein:Number,
            carbohydrates:Number,
            fat:Number
        }
    )

    const foodModel = mongoose.model("food", foodSchema);

    app.post("/addfood",(req,res)=>{
    var inp=req.body    
    var food = new foodModel(inp);
    food.save();
    console.log(inp)
    res.send("success");
    })
    
    app.post("/getfood",(req,res)=>{
        var result= foodModel.find().then(
            (data)=>{res.json(data)}
        ).catch()
    })
    app.listen(3000,()=>{
        console.log("server started")
    })