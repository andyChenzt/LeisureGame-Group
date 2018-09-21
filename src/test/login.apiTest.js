const mocha = require('mocha');
const assert = require('assert');
const User = require('../../server/models/User');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const should = chai.should();
const request = require('supertest');

chai.use(chaiHttp);

describe('login test', function() {

	// test login with correct user information
	it('test correct info login api', function(done) {
		this.timeout(15000);
		let testInfo = {
			"email": "a@aaa",
			"password": "123"
		}

		request('http://localhost:3001')
			.post('/api/account/login')
			.send(testInfo)
			.set('Accept', 'application/json')
			.end(function(err, res) {
	          	expect(res.statusCode).to.equal(200);
	          	assert(res.body.success === 1);
	          	done();
	      	});
	});

	// test login with wrong user information
	it('test wrong info login api', function(done) {
		this.timeout(15000);
		let testInfo = {
			"email": "a@aaaaaa",
			"password": "123"
		}
		
		request('http://localhost:3001')
			.post('/api/account/login')
			.send(testInfo)
			.set('Accept', 'application/json')
			.end(function(err, res) {
	          	expect(res.statusCode).to.equal(403);
	          	assert(res.body.success === 0);
	          	assert(res.body.error === "invaild username or password")
	          	done();
	      	});
	});

})












