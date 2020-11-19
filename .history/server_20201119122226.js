const express = require('express');
const app = express();
const http = require('http').createServer(app);
const PORT = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.get('/', (req, res) => {
    res.render('index');
});
http.listen(PORT);


const io = require('socket.io')(http);
io.on('connection', (socket) => {
    console.log(socket, 'Connected...');
});