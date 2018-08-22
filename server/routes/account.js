var express = require('express');
var router = express.Router();

// search id or nick name (unique)
router.get('/account/', function(req, res, next) {
	res.send({type: 'GET'});
})

router.get('/account/:id', function(req, res, next) {
	res.send({type: 'GET'});
})

// sign up
router.post('/account/signup', function(req, res, next) {
	console.log(req.body);
	res.send({type: 'POST'});
})

// sign in 
// maybe verify at here
router.post('/account/signin', function(req, res, next) {
	console.log(req.body);
	res.send({type: 'POST'});
})

// change name or information
router.put('/account/:id', function(req, res, next) {
	res.send({type: 'PUT'});
})

// delete the account
router.delete('/:id', function(req, res, next) {
	res.send({type: 'DELETE'});
})


module.exports = router;