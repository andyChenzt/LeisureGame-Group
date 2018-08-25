const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User");
const HighScore = require("../models/Score");

mongoose.connect('mongodb://localhost/LeisureGame');
mongoose.Promise = global.Promise;

// get high score, high score board
router.get("/score/", function(req, res, next) {
	HighScore.find({}).then(function(result) {
		console.log(result[0]);
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
	var highScorePlayer = {
		nickName: req.body.nickName,
		score: req.body.score
	};
	console.log(highScorePlayer);
	HighScore.find({}).then(function(result) {
		console.log(result.snakeGame, result.drawingGame);
		if(req.params.game === "drawingGame") {
			record.drawingGame.push(highScorePlayer)
		} else if(req.params.game === "snakeGame") {
			record.snakeGame.push(highScorePlayer)
		}
		res.send({sucess: 1});
	})
	
    
});

module.exports = router;