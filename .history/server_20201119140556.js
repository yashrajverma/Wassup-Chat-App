const express = require('express');
const { Socket } = require('socket.io');
const app = express();
const http = require('http').createServer(app);
const PORT = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + 'index.html');
});
http.listen(PORT, () => {
    console.log("Server is running on Port:3000");
});

const io = require('socket.io')(http)
io.on('connection', (socket) => {
    console.log("Connected...");
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg);
    })
})