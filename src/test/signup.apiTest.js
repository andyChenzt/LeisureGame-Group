const mocha = require('mocha');
const assert = require('assert');
const User = require('../../server/models/User');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const request = require('supertest');

chai.use(chaiHttp);

describe('sign up  test', function() {

	// test sign up with exist nickname, otherwise cannot sign up with the nick name
	it('test check nickname api', function(done) {
		request('http://localhost:3001')
			.get('/api/account/rr')  // rr is in db
			.set('Accept', 'application/json')
			.end(function(err, res) {
	          	expect(res.statusCode).to.equal(200);
	          	assert(res.body.success === 0);
	          	assert(res.body.error === "the nick name has been taken");
	          	done();
	      	});
	});

	it('test sign up api', function(done) {
		// new user
		let user = {
			"firstName": "andyt",
			"lastName": "ct",
			"nickName": "testapi",
			"email": "test@api",
			"password": "123"
		}
		request('http://localhost:3001')
			.post('/api/account/signup')  
			.send(user)
			.set('Accept', 'application/json')
			.end(function(err, res) {
	          	expect(res.statusCode).to.equal(200);
	          	assert(res.body.success === 1);
	          	assert(res.body.user.firstName === "andyt");
	          	done();
	      	});
	});


})