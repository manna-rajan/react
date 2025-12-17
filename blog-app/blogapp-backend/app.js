var mongoose = require('mongoose');
var express = require('express');
var cors = require('cors');
const { Await } = require('react-router-dom');

var app = express();
app.use(cors());
app.use(express.json());

const mongoURI = "mongodb+srv://manna:manna@cluster0.lqqm8gv.mongodb.net/blog-app?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

const blogSchema = new mongoose.Schema(
    {
        name: String,
        phone: Number,
        email: String,
        gender: String,
        password: String
    }
);

const blogModel = mongoose.model("user", blogSchema);

app.post("/signup", (req, res) => {
    var inp = req.body;
    var user = new blogModel(inp);
    user.save();
    console.log(inp);
    res.send("success");
});
app.post("/signin", async (req, res) => {
    var inp = req.body;
    var eml = inp.email;
    var pass = inp.password;
    const user = await blogModel.findOne({ email: eml })
    console.log("userdata", user);
    if (!user) {
        return res.json({ status: "invaid email" });
    }
    if (user.password == pass) {
        return res.json({ status: "success", userid: user._id , name:user.name });
    }
    else {
        return res.json({ status: "failed" });
    }
}
);

const blogSchema1 = new mongoose.Schema(
    {
        name: String,
        userId: {type:mongoose.Schema.Types.ObjectId, ref:'user'},
        title: {type:String, required:true},
        description: String

    }
);
const blogModel1 = mongoose.model("blog1", blogSchema1);

app.post("/post",  (req, res) => {
    var inp = req.body;
    var user = new blogModel1(inp);
    user.save();
    console.log(inp);
    res.send("success");
    return res.json({ status: "success" });
})

app.post("/mypost", async (req, res) => {
const input=req.body;   
const userid=input.userid;  
     console.log(userid);
     await blogModel1.find( {userId : userid}).then((post) => {
        res.json(post)}).catch(e => { console.log(e) });
})


app.post("/view",  (req, res) => {
     blogModel1.find().then((post) => {
        res.json(post)}).catch(e => { console.log(e) });
     
    
})

app.listen(3002, () => {
    console.log("server started");
});
