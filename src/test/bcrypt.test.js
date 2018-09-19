const mocha = require('mocha');
const assert = require('assert');
const User = require('../../server/models/User');


describe('bcrypt test', function() {

	var user;

	beforeEach(function(done) {
		user = new User({
			firstName: "Andy",
			lastName: "C",
			nickName: "Rr",
			email: "me@me.com",
			password: "123qwe"
		});
		testPassword = user.password;
		user.save().then(function() {
			assert(user.isNew === false);
			done();
		});
	});

	// test password encryption
	it('test bcrypt password', function(done) {
		User.findOne({_id: user._id}).then(function(result) {
			result.validPassword(testPassword, function(err, isMatch) {
				assert(isMatch);
				done();
			});
		});
	});

	

})