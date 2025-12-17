var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');

var app = express();
app.use(cors());
app.use(express.json());

app.get("/hello", (req, res) => {
    res.send("lorem");
});
app.get("/ham", (req, res) => {
    res.send("hamburgerrrrr");
});

app.listen(3002, () => {
    console.log("server started");
})

