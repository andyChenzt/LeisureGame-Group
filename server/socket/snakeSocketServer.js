const server = require("../server");
const io = require("./index");

module.exports.snakeSocketServer = (server) => {
	console.log("start snake socker server");

	snakeGame.on('connection', (socket) => {
	    socketServer.emit('newMsg', "hello");

	    socket.on('disconnect', () => {
	    });

	    socket.on('data', (data) => {
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