var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var server = require('http').Server(app);
var accountRoutes = require('./routes/account');
// var io = require('socket.io')(server);

// app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use('/api', accountRoutes);

// socket, need to be seperte file
// io.sockets.on('connection', function(socket) {
//     console.log('socket connect' + socket.id);
//     io.emit('newMsg', "hello")

//     socket.on('disconnect', function() {
//         console.log('socket disconnect');
//     })

//     socket.on('data', function (data) {
//         console.log(socket.id +': ' + data.msg);
//         var message = {from: socket.id,
//                         msg: data.msg}
//         socket.emit('newMsg', message)
//     })

//     socket.on('mouseMove', function (data) {
//         // console.log(socket.id + data ); //+ ': x' + data.x + ', y' + data.y
//         socket.broadcast.emit('newMove', data);
//     })

//     socket.on('snakeMove', function(keyCode) {

//         socket.broadcast.emit('moveOnOtherSide', keyCode);
//     })

// })

server.listen( process.env.port || 3001, function() {
    console.log("listening 3001")
});