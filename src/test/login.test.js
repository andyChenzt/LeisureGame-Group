const mocha = require('mocha');
const assert = require('assert');
const User = require('../../server/models/User');


describe('finding test', function() {

	var user;

	beforeEach(function(done) {
		user = new User({
			firstName: "Andy",
			lastName: "C",
			nickName: "Rr",
			email: "me@me.com",
			password: "123qwe"
		});

		user.save().then(function() {
			assert(user.isNew === false);
			done();
		});
	});

	


})












