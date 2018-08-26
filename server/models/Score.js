const mongoose = require('mongoose');

const HighScorePlayerSchema = new mongoose.Schema({
	nickName: String,
	score: Number
});

const HighScoreSchema = new mongoose.Schema({
	game: {
		type: String,
	},
	// highScores:[HighScorePlayerSchema]
	scores: {
		count: {
    		type: Number,
    		default: 0
    	},
    	highScores:[HighScorePlayerSchema]
	}
});

const HighScore = mongoose.model('highScore', HighScoreSchema);

module.exports = HighScore;

