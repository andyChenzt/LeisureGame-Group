const mongoose = require('mongoose');

mongoose.Promise = global.Promise;


// connect to db before tests run
before(function(done) {
	mongoose.connect('mongodb://localhost/testo');

	mongoose.connection.once('open', function() {
		console.log("connected");
		done();
	}).on('error', function(error) {
		console.log('connection error:', error);
	});

});

// before every sigle test
beforeEach(function(done) {
	mongoose.connection.collections.users.drop(function() {
		done();
	});
});