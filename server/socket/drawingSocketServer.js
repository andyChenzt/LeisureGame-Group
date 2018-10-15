const server = require("../server");
const io = require("socket.io");

const emptyRoom = ["Room1", "Room2"];
const pendingRoom = [];

findRoom = () => {
	return emptyRoom[0];
}

getQuestion = () => {
	const question = ["Pig", "Bike"];
	const index = Math.floor((Math.random() * 10) / 5 + 1);
	return question[index];
}

// set up drawing socket server
module.exports.drawingSocketServer = (server) => {
	drawingGame = io(server).of('/drawingGameSocket');

	drawingGame.on('connection', (socket) => {
	    drawingGame.emit('newMsg', "hello");

	    socket.on('disconnect', () => {
	    });

	    socket.on('findRoom', () => {
	    	// find a room in pending room,
	    	if(pendingRoom.length === 0) {
	    		// no pendin room, get one available room
				var room = "new-room";
				pendingRoom.push(room);
		    	drawingGame.to(socket.id).emit('getRoom', room);
	    	} else {
	    		var waitingRoom = pendingRoom.pop();
	    		// pendingRoom.pop();
	    		drawingGame.to(socket.id).emit('findRoom', waitingRoom);

	    		socket.broadcast.in("new-room").emit('getPlayer', "get player2: "+socket.id);
	    		drawingGame.to(socket.id).emit('waitDrawing',"wait drawing");

	    		const question = "bike";
	    		socket.broadcast.in("new-room").emit('getQuestion', question);
	    	}
	    });

	    socket.on('joinRoom', (roomName) => {
	    	socket.join(roomName);
	    	drawingGame.to(socket.id).emit('pending', "waiting");

	    });

	    socket.on('testRoom', (testRoom) => {

	    });

	    socket.on('startGame', (msg) => {
	    	let rooms = Object.keys(socket.rooms);
	    	socket.broadcast.to(rooms[1]).emit('readyToWatch', "player 1 start drawing");

	    });

	    socket.on('testSok', (msg) => {
	    	let rooms = Object.keys(socket.rooms);
	    });

	    socket.on('exit', (msg) => {
	    	let rooms = Object.keys(socket.rooms);
	    	socket.broadcast.to(rooms[1]).emit('exit', "player exit");
	    })


	    socket.on('data', (data) => {
	        var message = {from: socket.id,
	                        msg: data.msg};
	        socket.emit('newMsg', message);
	    });

	    socket.on('mouseMove', (data) => {
	    	
	        // socket.broadcast.emit('newMove', data);
	        let rooms = Object.keys(socket.rooms);
	        socket.broadcast.to(rooms[1]).emit('newMove', data);
	    });

	    socket.on('snakeMove', (keyCode) => {

	        socket.broadcast.emit('moveOnOtherSide', keyCode);
	    });

	});
}
