const webconsole = require('console-io');
const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

const port = process.env.PORT;
const ip = '0.0.0.0';

const online = true;
app.use(webconsole({
    server,
    online, /* load jquery and socket.io from cdn */
})).use(express.static(__dirname));

webconsole.listen({
    server
});

server.listen(port, ip);
