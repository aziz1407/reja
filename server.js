const http = require('http');
const mongodb = require('mongodb');

let db;
const connectionString =
"mongodb+srv://Aiden:Aiden14@cluster0.xd5lx.mongodb.net/Reja"

mongodb.connect(connectionString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, (err, client) => {
    if(err) console.log('MongoDB connection failed!')
        else {
            console.log('MongoDB connection successful!');
            module.exports = client;

            const app = require('./app');
            const server = http.createServer(app);
            let PORT = 3000;
            server.listen(PORT, function() {
            console.log(`Everything working pretty smoothly: ${PORT}, http://localhost:3000`);
});
    }
});

