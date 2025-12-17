var express= require("express");
var mongoose =require("mongoose");
var cors =require("cors");

var app = express();
app.use(cors());
app.use(express.json());

const mongoURI = "mongodb+srv://manna:manna@cluster0.lqqm8gv.mongodb.net/gym-db?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
 .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

    const gymSchema =new mongoose.Schema(
        {
               name: String, 
            membershipType: String, 
            durationInMonths: Number,
            price: Number,
            startDate:Date,
            Trainer:String
        }
    )

    const gymModel = mongoose.model("gym", gymSchema);

    app.post("/addgym",(req,res)=>{
    var inp=req.body    
    var gym = new gymModel(inp);
    gym.save();
    console.log(inp)
    res.send("success");
    })
    
    app.post("/getgym",(req,res)=>{
        var result= gymModel.find().then(
            (data)=>{res.json(data)}
        ).catch()
    })
    app.listen(3000,()=>{
        console.log("server started")
    })