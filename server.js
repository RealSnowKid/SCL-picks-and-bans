const http = require('http');
const sockjs = require('sockjs');

const echo = sockjs.createServer({ prefix: '/echo' });
echo.on('connection', function (conn) {
    console.log("connect: " + conn.id);
    conn.on('data', function (message) {
        conn.write(message);
    });
    conn.on('close', function () {
        console.log("disconnect: " + conn.id);
    });
});

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello World!');
    res.end();
});
echo.installHandlers(server, { prefix: '/pnb' });
server.listen(process.env.PORT || 9999);