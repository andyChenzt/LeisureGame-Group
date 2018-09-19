const mocha = require('mocha');
const assert = require('assert');
const User = require('../../server/models/User');

describe('delete test', function() {

	var user;

	beforeEach(function(done) {
		user = new User({
			"firstName": "Andy",
			"lastName": "C",
			"nickName": "R",
			"email": "a@a",
			"password": "123qwe"
		});

		user.save().then(function() {
			assert(user.isNew === false);
			done();
		});

	});
	
	it('delete records', function(done) {

		User.findOneAndDelete({firstName: 'Andy'}).then(function() {
			User.findOne({firstName: "Andy"}).then(function(result) {
				assert(result === null);
				done();
			});
		});

	});
});