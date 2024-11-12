console.log('Running web server!');
const express = require('express');
const app = express();
const http = require('http');

// 1: Entry codes
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2: Session related codes
// 3: Related to Views
app.set("views", "views");
app.set("views engine", "ejs");


// 4: Related to routing
app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({test: "success"});
});

app.get('/', function (req, res) {
    res.render("harid.ejs");
});

const server = http.createServer(app);
let PORT = 1407;
server.listen(PORT, function() {
   console.log(`Everything working pretty smoothly: ${PORT}`);
});