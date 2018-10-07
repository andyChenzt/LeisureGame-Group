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
	    	console.log(emptyRoom);
	    	if(pendingRoom.length === 0) {
	    		// no pendin room, get one available room
	    		console.log("new room")
				var room = "new-room";
				pendingRoom.push(room);
		    	drawingGame.to(socket.id).emit('getRoom', room);
	    	} else {
	    		console.log("find room")
	    		var waitingRoom = pendingRoom[0];
	    		pendingRoom.pop();
	    		drawingGame.to(socket.id).emit('findRoom', waitingRoom);
	    		// console.log("test broadcast")
	    		socket.broadcast.in("new-room").emit('getPlayer', "get player2: "+socket.id);
	    		drawingGame.to(socket.id).emit('waitDrawing',"wait drawing");

	    		const question = "bike";//getQuestion();
	    		console.log("question: " + question);
	    		socket.broadcast.in("new-room").emit('getQuestion', question);
	    	}
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

	    socket.on('startGame', (msg) => {
	    	console.log(msg);
	    	let rooms = Object.keys(socket.rooms);
	    	socket.broadcast.to(rooms[1]).emit('readyToWatch', "player 1 start drawing");

	    });

	    socket.on('testSok', (msg) => {
	    	console.log(msg);
	    	let rooms = Object.keys(socket.rooms);
	    	console.log(rooms);
	    });

	    socket.on('exit', (msg) => {
	    	console.log(msg);
	    	let rooms = Object.keys(socket.rooms);
	    	socket.broadcast.to(rooms[1]).emit('exit', "player exit");
	    })


	    socket.on('data', function (data) {
	        console.log(socket.id +': ' + data.msg);
	        var message = {from: socket.id,
	                        msg: data.msg};
	        socket.emit('newMsg', message);
	    });

	    socket.on('mouseMove', function (data) {
	        // console.log(socket.id + data ); //+ ': x' + data.x + ', y' + data.y
	        socket.broadcast.emit('newMove', data);
	        // let rooms = Object.keys(socket.rooms);
	        // console.log(rooms);
	        // socket.broadcast.to(rooms[1]).emit('newMove', data);
	    });

	    socket.on('snakeMove', function(keyCode) {

	        socket.broadcast.emit('moveOnOtherSide', keyCode);
	    });

	});
}

// module.exports drawingSocketServer;