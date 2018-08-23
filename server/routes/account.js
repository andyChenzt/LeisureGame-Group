const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../../models/User");
const UserSession = require("../../models/UserSession");

mongoose.connect("mongodb://locallhost/...");
mongoose.Promise = global.Promise;

// search id or nick name (unique)
router.get("/account/", function(req, res, next) {
    res.send({ type: "GET" });
});

// search id or nick name (unique)
// input finish editing check directly
// otherwise cannot register
router.get("/account/:nick", function(req, res, next) {
    res.send({ type: "GET" });
});

// sign up
router.post("/account/signup", function(req, res, next) {
    console.log(req.body);
    //do logic to check 


    User.create(req.body).then(function(user) {
        res.send(user);
    }).catch(next);
});

// sign in
// maybe verify at here, doing auth
router.post("/account/signin", function(req, res, next) {
    console.log(req.body);
    res.send({ type: "POST" });
});

// change name or information
router.put("/account/:id", function(req, res, next) {
    // doing logic

    res.send({ type: "PUT" });
});

// delete the account
router.delete("/:id", function(req, res, next) {
    res.send({ type: "DELETE" });
});

module.exports = router;
