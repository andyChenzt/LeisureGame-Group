const server = require("../server");
const io = require("./index");
// const io = require('socket.io');

// exports.drawingSocketServer = () => {
module.exports.drawingSocketServer = () => {
	console.log("start drawing socker server");
	socketServer = io.of('/api/drawingGame');

	socketServer.on('connection', function(socket) {
	    console.log('socket connect' + socket.id);
	    socketServer.emit('newMsg', "hello");

	    socket.on('disconnect', function() {
	        console.log(socket, ' socket disconnect');
	    });

	    socket.on('findRoom', function(){
	    	// find a room in pending room,
	    	// start game
	    	socketServer.to('room').emit('getQuestion', question);

	    	// if not, find a empty room, -> pending
	    	var room = "empty-room"
	    	// no empty, create one room, -> pending
	    	var room = "new-room";
	    	socketServer.to(socket.id).emit('getRoom', room);
	    });

	    socket.on('start', function(){
	    	
	    });


	    socket.on('data', function (data) {
	        console.log(socket.id +': ' + data.msg);
	        var message = {from: socket.id,
	                        msg: data.msg};
	        socket.emit('newMsg', message);
	    });

	    socket.on('mouseMove', function (data) {
	        // console.log(socket.id + data ); //+ ': x' + data.x + ', y' + data.y
	        socket.broadcast.emit('newMove', data);
	    });

	    socket.on('snakeMove', function(keyCode) {

	        socket.broadcast.emit('moveOnOtherSide', keyCode);
	    });

	});
}

// module.exports drawingSocketServer;