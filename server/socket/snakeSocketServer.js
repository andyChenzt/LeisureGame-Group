const server = require("../server");
const io = require("./index");

module.exports.snakeSocketServer = (server) => {
	console.log("start snake socker server");

	snakeGame.on('connection', (socket) => {
		console.log('socket connect' + socket.id);
	    socketServer.emit('newMsg', "hello");

	    socket.on('disconnect', () => {
	        console.log('socket disconnect');
	    });

	    socket.on('data', (data) => {
	        console.log(socket.id +': ' + data.msg);
	        var message = {from: socket.id,
	                        msg: data.msg};
	        socket.emit('newMsg', message);
	    });

	    socket.on('mouseMove', (data) => {
	        socket.broadcast.emit('newMove', data);
	    });

	    socket.on('snakeMove', (keyCode) => {

	        socket.broadcast.emit('moveOnOtherSide', keyCode);
	    });

	});
}