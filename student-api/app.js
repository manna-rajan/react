var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");

var app = express();
app.use(cors());
app.use(express.json());

const mongoURI = "mongodb+srv://manna:manna@cluster0.lqqm8gv.mongodb.net/studentdb?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

const studentSchema = new mongoose.Schema(
    {
        name:String,
        rollno:String,
        admno:String,
        colg:String
    }
)

const studentModel =mongoose.model("Students",studentSchema)


app.post("/studententry", (req, res) => {
    var input = req.body
    var student= new studentModel(input)
    student.save()
    console.log(input)
    res.send("success")
})
 app.post("/view",(req,res)=>{
    var result=studentModel.find().then(
        (data)=>{res.json(data)}
    ).catch()
     
 })

app.listen(3001, () => {
    console.log("server started")
})
