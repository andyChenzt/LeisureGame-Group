const mongoose = require('mongoose');

const HighScorePlayerSchema = new mongoose.Schema({
	nickName: String,
	score: Number
});

// high score schema
const HighScoreSchema = new mongoose.Schema({
	game: {
		type: String,
	},
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

