var mongoose = require('mongoose');
var express = require('express');
var cors = require('cors');

var app = express()
app.use(cors())
app.use(express.json())

const mongoURI = "mongodb+srv://manna:manna@cluster0.lqqm8gv.mongodb.net/gym-app?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

const gymSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        durationInMonths: Number,
        price: Number,
        startDate: Date,
        Trainer: String,
        password: String,
        phone: Number,
        gender: String
    }
)

const gymModel = mongoose.model("member", gymSchema);

app.post('/signup', (req, res) => {
    var inp = req.body
    var user = new gymModel(inp);
    user.save();
    console.log(inp)
    res.send("success");
})

app.post("/signin", async (req, res) => {
    var inp = req.body
    var pass = inp.password
    var eml = inp.email
    const mem = await gymModel.findOne({ email: eml })
    if (!mem) {
        return res.json({ status: "invaild email" })
    }
    if (mem.password == pass) {
        return res.json({ status: "success" });
    }
    else {
        return res.json({ status: "failed" });
    }
}
);
app.post('/choice', async (req, res) => {
    var inp = req.body
    var nam = inp.name
    const check = await gymModel.findOne({ name: nam })
    if (!check) {
        return res.json({ status: "no user found" })
    } else {
        var mem =  gymModel(inp);
        mem.save();
        console.log(inp)
        res.send("success");
    }
})
app.post('/getmembers', async (req, res) => {
    const mem = await gymModel.find().then((members) => {
        res.json(members)
    }).catch();

})



app.listen(3002, () => {
    console.log("server started");
});


