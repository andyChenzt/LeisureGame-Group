const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User");
// const UserSession = require("../../models/UserSession");

// connect to localhost db, will transfor to mlab, which could deploy to heroku
mongoose.connect('mongodb://localhost/LeisureGame');
mongoose.Promise = global.Promise;

// search all
router.get("/account", function(req, res, next) {
    User.find({}).then(function(result) {
        res.send({success: 1,
                  users:  result
              });
    });
    
});

// search id or nick name (unique)
// input finish editing check directly
// otherwise cannot register
router.get("/account/:nickName", function(req, res, next) {
    User.find({nickName: req.params.nickName}).count(function(err, results) {
        console.log(results);
        if(results < 1) {
            res.send({ success: 1 });
        } else {
            res.send({ success: 0 });
        }
    });
    
});

// sign up
router.post("/account/signup", function(req, res, next) {
    console.log(req.body);
    //do logic to check 
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        nickName: req.body.nickName,
        email: req.body.email,
        password: req.body.password
    });

    user.save().then(function() {
        res.send(user);
    });
    // catch error
    //.catch(next);
});

// sign in
// maybe verify at here, doing auth
router.post("/account/signin", function(req, res, next) {
    console.log("body: " + req.body.password);

    User.findOne({email: req.body.email}).then(function(user) {
        console.log("found user: " + user);
        // validation password
        var isMatch = user.validPassword(req.body.password, function(err, isMatch) {
            if(err) {
                res.status(500).json({
                    error: 'server error'
                });
            }
            if(isMatch) {
                console.log("correct");
                var info = user.deleteSensitiveInfo();
                res.send({ success: 0,
                    user: {info} 
                });
            } else {
                res.status(403).json({
                    error: 'invaild username or password'
                });
            } 
        });
          
    });
});

// change name or information
router.put("/account/:id", function(req, res, next) {
    // doing logic
    var newInfo = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        nickName: req.body.nickName,
        email: req.body.email,
        password: req.body.password
    };

    User.findOneAndUpdate({_id: req.params.id}, newInfo).then(function() {
        res.send({ success: 1,
                    user: newInfo });
    });
    
});

// delete the account
// do we need delete one account 
router.delete("/:id", function(req, res, next) {
    res.send({ type: "DELETE" });
});

module.exports = router;
