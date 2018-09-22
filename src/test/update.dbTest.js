const mocha = require('mocha');
const assert = require('assert');
const User = require('../../server/models/User');

describe('update test', function() {

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
	

	//create tests, update user information
	it('update user', function(done) {
		User.findOneAndUpdate({nickName: user.nickName}, {nickName: 'andy'}).then(function() {
			User.findOne({_id: user._id}).then(function(result) {
				assert(result.nickName === 'andy');
				done();
			});
		});
	});

});