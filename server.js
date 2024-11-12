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
app.get("/hello", function(req, res) {
res.end(`<h1>Merhaba ya Aiden!</h1>`);
});

app.get("/gift", function(req, res) {
    res.end(`<h1>Welcome the Gift World!</h1>`);
});

app.get("/coding", function(req, res) {
    res.end(`<h1 style="font-style: italic; background: gold;">Coding is neither that onerous nor breeze!</h1>`);
    });

const server = http.createServer(app);
let PORT = 1407;
server.listen(PORT, function() {
   console.log(`Everything working pretty smoothly: ${PORT}`);
});