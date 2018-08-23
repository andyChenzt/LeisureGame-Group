// var io = require('socket.io')(server);

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

// export