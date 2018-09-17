const mocha = require('mocha');
const assert = require('assert');
const User = require('../../server/models/User');

describe('saving test', function() {
	//create tests
	it('save records', function(done) {
		var user = new User({
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