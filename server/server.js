const express = require('express');

var app = express();

const http = require('http');
const server = http.createServer(app);
const socket = require('socket.io');
const io = new socket.Server(server);

app.use(express.static('public'));


const port = 3000;
server.listen(port, () => console.log(`listening on port ${port}`));