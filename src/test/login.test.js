const mocha = require('mocha');
const assert = require('assert');
const User = require('../../server/models/User');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const should = chai.should();
const server = require('../../server/server.js');

chai.use(chaiHttp);

describe('login test', function() {

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

	it('test login', function(done) {
		this.timeout(15000);
		let testInfo = {
			"email": "a@aa",
			"password": "123"
		}
		// chai.request(server)
		chai.request('http://localhost:3001')
			.post('/api/account/login')
			.type('json')
			.send({email: "a@aa", "password": "123"})
			.then(function(err, res) {
				// res.should.have.status(200);
				console.log(res);
				// res.body.should.be.a('object');
				// expect(res).to.have.status(200);
				
				res.should.have.status(200);
				done();
			}).catch((err) => {
				throw err;
			});
	});


})












