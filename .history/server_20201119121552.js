const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.get('/', (req, res) => {
    res.render('index');
});
app.listen(PORT);


const io = require('socket.io')(app);
io.on('connection', (socket) => {
    console.log("Connected...");
})