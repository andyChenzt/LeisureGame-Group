const io = require("socket.io")

module.exports.socketServer = function(server) {
	socketServer = io(server);
}
