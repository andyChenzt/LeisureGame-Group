const express = require("express");
const router = express.Router();
// const mongoose = require("mongoose");
// const User = require("../../models/User");

// mongoose.connect("mongodb://locallhost/...");
// mongoose.Promise = global.Promise;

// get high score, high score board
router.get("/score/", function(req, res, next) {
    res.send({ type: "GET" });
});

// get player high score, for specific player
router.post("/score/:nick", function(req, res, next) {
	console.log(req.body);
    res.send({ type: "POST" });
});

// update player score after game
router.post("/score/:nick/score", function(req, res, next) {
    res.send({ type: "POST" });
});

module.exports = router;