const mocha = require('mocha');
const assert = require('assert');
const User = require('../../server/models/User');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();


describe('finding test', () => {

	var user;

	beforeEach((done) => {
		user = new User({
			firstName: "Andy",
			lastName: "C",
			nickName: "Rr",
			email: "me@me.com",
			password: "123qwe"
		});

		user.save().then(() => {
			assert(user.isNew === false);
			done();
		});
	});

	//create tests, test find user by nickName
	it('find user by nickName', (done) => {
		User.findOne({nickName: user.nickName}).then((result) => {
			assert(result.firstName === user.firstName);
			done();
		});
	});

	// find user by _id 
	it('find user by id', (done) => {
		User.findOne({_id: user._id}).then(function(result) {
			assert( result._id.toString() === user._id.toString() );
			done();
		});
	});

	// find user who do not exit
	it('find user who do not exist by nickName', (done) => {
		User.findOne({nickName: "notExist"}).then(function(result) {
			assert(result === null);
			done();
		});
	});

})












