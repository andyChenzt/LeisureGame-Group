const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User");
const HighScore = require("../models/Score");

mongoose.connect('mongodb://localhost/LeisureGame');
mongoose.Promise = global.Promise;

const games = ["drawingGame", "snakeGame"];
function initHighScore() {
	for(var i = 0; i <= games.length - 1; i++) {
		HighScore.findOne({game: games[i]}).countDocuments(function(error, result) {
			if(result = 0) {
				var gameScore = new HighScore({
			        game: games[i],
			    });
			    gameScore.save().then(function() {
			    	console.log("save success");
			    });
			}
		});
	}
	
}

// create collection first
router.get("/score/init", function(req, res, next) {
	for(var i = 0; i <= games.length - 1; i++) {
		var gameScore = new HighScore({
	        game: games[i],
	    });
	    gameScore.save().then(function() {
	    	console.log("save success");
	    });
	}
});

// get high score, high score board
router.get("/score/", function(req, res, next) {
	HighScore.find({}).then(function(result) {
		console.log(result.length);
		res.send({ success: 1,
		 			socres: result});
	});
    
});

// get player high score, for specific player
router.get("/score/:nickName", function(req, res, next) {
	console.log(req.body);

	User.findOne({nickName: req.params.nickName}).then(function(result) {
		console.log(result);
		var drawingGameScores = result.drawingGame.scores;
		var snakeGameScores = result.snakeGame.scores;
		var response = {
			success: 1,
			scores: {drawingGame: drawingGameScores,
					 snakeGame: snakeGameScores
					}
		}
		res.send( response );
	});
});

// update player score after game
router.post("/score/:game/", function(req, res, next) {
	initHighScore();
	var highScorePlayer = {
		nickName: req.body.nickName,
		score: req.body.score
	};
	console.log(highScorePlayer);
	console.log(req.params.game);
	HighScore.findOne({game: req.params.game}).then(function(result) {
		// console.log(result.socres);
		if(req.params.game === "drawingGame") {
			console.log(result);

			result.scores.highScores.push(highScorePlayer);
			result.save();
		} else if(req.params.game === "snakeGame") {
			result.scores.highScores.push(highScorePlayer);
			result.save();
		}
		HighScore.update({game: req.params.game}, {$inc: {'scores.count': 1}})
			.then(function(result){
				console.log(result);
			});
		res.send({sucess: 1});
	}).catch(function(error) {
		console.log(error);
	});
	
    
});

module.exports = router;