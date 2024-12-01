console.log('Running web server!');
const express = require('express');
const app = express();

const fs = require("fs");

// MongoDB call
const db = require('./server').db();
const mongodb = require("mongodb")


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
    // console.log('STEP-2 Entered to BackEnd')
    console.log('user entered /create-item');
    console.log(req.body);
    const new_reja = req.body.reja;
    // console.log('STEP-3 Data that came to BackEnd from FrontEnd:...', new_reja)

    // console.log('STEP-4 Connecting to DB')

    console.log('')
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        // console.log('STEP-5, Derived data from DB')
        console.log(data.ops);
        // console.log('STEP-6 Sending data to FrontEnd'); 
        res.json(data.ops[0]);
    });
});

app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id)}, (err, data) => {
        res.json({state: "success"});
    })
});

app.post("/edit-item", (req, res) => {
    const data = req.body;
    console.log(data);
    db.collection("plans").findOneAndUpdate({_id: new mongodb.ObjectId(data.id)},  
    { $set:{ reja: data.new_input}}, (err, data) => {
        res.json({state: "success!"});
    })
});

app.post("/delete-all", (req, res) => {
    if(req.body.delete_all) {
        db.collection("plans").deleteMany(function() {
            res.json({state: "All plans will be removed?"})
        });
    }
})

// app.get("/author", (req, res) => {
//     res.render("author", {user: user})
// });

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
