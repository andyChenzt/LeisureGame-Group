const server = require("../server");
// const io = require("./index");
const io = require("socket.io");

module.exports.drawingSocketServer = function(server) {
	console.log("start drawing socker server");
	drawingGame = io(server).of('/drawingGameSocket');

	drawingGame.on('connection', function(socket) {
	    console.log('socket connect ' + socket.id + " drawingGame");
	    drawingGame.emit('newMsg', "hello");

	    socket.on('disconnect', function() {
	        console.log(socket.id, ' socket disconnect');
	    });

	    socket.on('findRoom', function(){
	    	// find a room in pending room,
	    	// start game
	    	const question = "question"
	    	socket.to('room').emit('getQuestion', question);

	    	// if not, find a empty room, -> pending
	    	var room = "empty-room"
	    	// no empty, create one room, -> pending
	    	var room = "new-room";
	    	drawingGame.to(socket.id).emit('getRoom', room);
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