const http = require('http');
const sockjs = require('sockjs');
const path = require('path');
const express = require('express');
const app = express();
require('dotenv').config();
const hirez = require("hirez-api-https");
const api = new hirez.Smite({
  platform: "PC",
  devId: process.env.DEV_ID,
  authKey: process.env.AUTH_KEY
});

const echo = sockjs.createServer({ prefix: '/echo' });
var clients = {};

// Broadcast to all clients
function broadcast(message) {
    // iterate through each client in clients object
    for (var client in clients) {
        // send the message to that client
        clients[client].write(message);
    }
}

echo.on('connection', function (conn) {
    console.log("connect: " + conn.id);
    clients[conn.id] = conn;
    conn.on('data', function (message) {
        broadcast(message);
    });
    // on connection close event
    conn.on('close', function () {
        console.log("disconnect: " + conn.id);
        delete clients[conn.id];
    });
});

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'app/build', 'index.html')));
app.get('/gods', async(req, res) => {
    data =  await api.session();
    console.log(data);
    res.send("hello");
});

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'app/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'app/build', 'index.html'));
    });
}

const server = http.createServer(app);
echo.installHandlers(server, { prefix: '/pnb' });
server.listen(process.env.PORT || 9999);