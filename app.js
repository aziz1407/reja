console.log('Running web server!');
const express = require('express');
const app = express();

const fs = require("fs");

// MongoDB call
const db = require('./server').db();


let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data)
    }
})

// 1: Entry codes
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2: Session related codes
// 3: Related to Views
app.set("views", "views");
app.set("view engine", "ejs");


// 4: Related to routing
app.post("/create-item", (req, res) => {
    console.log('user entered /create-item');
    console.log(req.body);
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        console.log(data.ops);
        res.json(data.ops[1]);
    });
});

app.get("/author", (req, res) => {
    res.render("author", {user: user})
});

app.get('/', function (req, res) {
    console.log('user entered /');
    db.collection("plans").find().toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end('something went wrong!');
        } else {
            res.render("reja", {items: data});
        }
    })
});


module.exports = app;
