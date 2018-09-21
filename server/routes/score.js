const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User");
const HighScore = require("../models/Score");

// connect to localhost db
mongoose.connect('mongodb://localhost/LeisureGame');
mongoose.Promise = global.Promise;

// define the game, if add more games, add in the array
const games = ["drawingGame", "snakeGame"];
function initHighScore() {
	for(var i = 0; i <= games.length - 1; i++) {
		HighScore.findOne({game: games[i]}).countDocuments(function(error, result) {
			if(error) {
				res.status(500).json({
                    error: 'server error'
                });
			}
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

// create scores collection first
router.get("/score/init", function(req, res, next) {
	for(var i = 0; i <= games.length - 1; i++) {
		var gameScore = new HighScore({
	        game: games[i],
	    });
	    gameScore.save().then(function(error) {
	    	if(error) {
	    		res.status(500).json({
                    error: 'server error'
                });
	    	}
	    	console.log("save success");
	    });
	}
});

// get high score from db
router.get("/score/", function(req, res, next) {
	HighScore.find({}).then(function(error, result) {
		console.log(result.length);
		if(error) {
			res.status(500).json({
                error: 'server error'
            });
		}
		res.send({ success: 1,
		 			socres: result});
	});
    
});

// get player high score, for specific player
router.get("/score/:nickName", function(req, res, next) {
	User.findOne({nickName: req.params.nickName}).then(function(error, result) {
		if(error) {
			res.status(500).json({
                error: 'server error'
            });
		}
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
	var game = req.params.game;
	var playerScore = {
		nickName: req.body.nickName,
		score: req.body.score
	};

	// save score in player scoreboard
	User.findOne({nickName: playerScore.nickName}).then(function(error, result) {
		if(error) {
			res.status(500).json({
                error: 'server error'
            });
		}
		if(game === "drawingGame") {
			result.drawingGame.scores.push(playerScore.score);
			result.save();
			User.update({nickName: playerScore.nickName}, {$inc: {'drawingGame.times': 1}})
				.then(function() {
					console.log("saved in person");
				});
		} else if(game === "snakeGame"){
			result.snakeGame.scores.push(playerScore.score);
			result.save();
			User.update({nickName: playerScore.nickName}, {$inc: {'snakeGame.times': 1}})
				.then(function() {
					console.log("saved in person");
				});
		}
	});

	// save score in game high scoreboard
	HighScore.findOne({game: req.params.game}).then(function(result) {
		// push new score
		result.scores.highScores.push(playerScore);
		result.save();
		
		// update number
		HighScore.update({game: req.params.game}, {$inc: {'scores.count': 1}})
			.then(function(result){
				console.log(result);
			});
		res.send({sucess: 1});
	}).catch(function(error) {
		console.log(error);
		res.status(500).json({
            error: 'server error'
        });
	});
	
    
});

module.exports = router;