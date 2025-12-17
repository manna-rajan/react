var mongoose = require('mongoose');
var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());
app.use(express.json());

const mongoURI = "mongodb+srv://manna:manna@cluster0.lqqm8gv.mongodb.net/lodge-app?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

const lodgeSchema = new mongoose.Schema(
    {
        name: String,
        phone: Number,
        email: String,
        gender: String,
        password: String
    }
);

const lodgeModel = mongoose.model("user", lodgeSchema);

app.post("/signup", (req, res) => {
    var inp = req.body;
    var user = new lodgeModel(inp);
    user.save();
    console.log(inp);
    res.send("success");
});
app.post("/signin", async (req, res) => {
    var inp = req.body;
    var eml = inp.email;
    var pass = inp.password;
    const user = await lodgeModel.findOne({ email: eml })
    console.log("userdata", user);
    if (!user) {
        return res.json({ status: "invaid email" });
    }
    if (user.password == pass) {
        return res.json({ status: "success" });
    }
    else {
        return res.json({ status: "failed" });
    }
}
);

const lodgeSchema1 = new mongoose.Schema(
    {
        name: String,
      bed: Number,
        guest: Number,
        room: Number,
        price: Number

    }
);
const logdeModel1 = mongoose.model("blog1", lodgeSchema1);

app.post("/book", async (req, res) => {
    var inp = req.body;
  
    const userExists = await lodgeModel.findOne({ name: inp.name }).catch(e => { console.log(e) });

    if (userExists) {
        var booking = new logdeModel1(inp);
        await booking.save();
        res.json({ status: "success" });
    } else {
        res.json({ status: "user not found" });
    }
  
})




app.post("/view",  (req, res) => {
     logdeModel1.find().then((post) => {
        res.json(post)}).catch(e => { console.log(e) });
     
    
})

app.listen(3002, () => {
    console.log("server started");
});
