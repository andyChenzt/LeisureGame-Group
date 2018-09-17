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

	//create tests, test find user by nickName
	it('find user by nickName', function(done) {
		User.findOne({nickName: user.nickName}).then(function(result) {
			assert(result.firstName === user.firstName);
			done();
		});
	});


	// find user by _id 
	it('find user by id', function(done) {
		User.findOne({_id: user._id}).then(function(result) {
			assert( result._id.toString() === user._id.toString() );
			done();
		});
	});
})