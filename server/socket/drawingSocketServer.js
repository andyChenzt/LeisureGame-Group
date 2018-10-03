const server = require("../server");
// const io = require("./index");
const io = require("socket.io");

module.exports.drawingSocketServer = function(server) {
	console.log("start drawing socker server");
	drawingGame = io(server).of('/drawingGameSocket');

	const pendingRoom = [];
	const emptyRoom = [];

	drawingGame.on('connection', function(socket) {
	    console.log('socket connect ' + socket.id + " drawingGame");
	    drawingGame.emit('newMsg', "hello");

	    socket.on('disconnect', function() {
	        console.log(socket.id, ' socket disconnect');
	    });

	    socket.on('findRoom', function(){
	    	// find a room in pending room,
	    	if(pendingRoom.length === 0) {
	    		console.log("new room")
				var room = "new-room";
				pendingRoom.push(room);
		    	drawingGame.to(socket.id).emit('getRoom', room);
	    	} else {
	    		console.log("find room")
	    		var waitingRoom = pendingRoom[0];
	    		pendingRoom.pop();
	    		drawingGame.to(socket.id).emit('getRoom', waitingRoom);
	    		console.log("test broadcast")
	    		socket.broadcast.in("new-room").emit('testBroadcast', "u r in the room");

	    	}
	    	// start game
	    	const question = "question"
	    	socket.to('room').emit('getQuestion', question);

	    	// if not, find a empty room, -> pending
	    	// var room = "empty-room"
	    	// no empty, create one room, -> pending
	    	
	    });

	    socket.on('joinRoom', function(roomName) {
	    	console.log("join room");
	    	socket.join(roomName);
	    	console.log(Object.keys(socket.rooms));
	    	drawingGame.to(socket.id).emit('pending', "waiting");

	    });

	    socket.on('testRoom', function(testRoom) {
	    	console.log(testRoom);
	    	console.log(Object.keys(socket.rooms));

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