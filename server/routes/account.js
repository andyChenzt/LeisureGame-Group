const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

// connect to localhost db, will transfor to mlab, which could deploy to heroku
mongoose.connect('mongodb://localhost/LeisureGame');
mongoose.Promise = global.Promise;

// search all
router.get("/account", function(req, res, next) {
    User.find({}).then(function(result) {
        res.send({success: 1,
                  users:  result
              });
    }).catch((next) => {
        res.status(500).json({
            success: 0,
            error: 'server error'
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
            res.send({ success: 0,
                        error: "the nick name has been taken" });
        }
    }).catch(() => {
        res.status(403).json({
            success: 0,
            error: 'server error!'
        });
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
        const info = user.deleteSensitiveInfo();
        const id = user._id;
        console.log("id", id);  
        jwt.sign({user: info}, 'secretKey', (err, token) => {
            console.log("token", token);
            res.send({ success: 1,
                user: info,//user.deleteSensitiveInfo(),
                id: id,
                token: token
            });
        })
        // res.send({success: 1,
        //           user: user.deleteSensitiveInfo()});
    }).catch((next) => {
        res.status(500).json({
            success: 0,
            error: 'server error'
        });
    });
});

// login in
// maybe verify at here, doing auth
router.post("/account/login", function(req, res, next) {
    console.log("body: " + req.body.password, req.body.email);

    User.findOne({email: req.body.email}).then(function(user) {
        
        if(!user) {
            console.log("found user: " + user);
            res.status(403).json({
                    success: 0,
                    error: 'invaild username or password'
            });
        }
        // validation password
        var isMatch = user.validPassword(req.body.password, function(err, isMatch) {
            if(err) {
                res.status(500).json({
                    success: 0,
                    error: 'server error'
                });
            }
            if(isMatch) {
                console.log("correct");
                const info = user.deleteSensitiveInfo();
                const id = user._id;
                console.log("id", id);
                // generate token
                console.log("generate token");
                jwt.sign({user: info}, 'secretKey', (err, token) => {
                    console.log(token);
                    res.send({ success: 1,
                        user: {info:info},//user.deleteSensitiveInfo(),
                        id: id,
                        token: token
                    });
                })
                // res.send({ success: 1,
                //     user: {info} 
                // });
            } else {
                res.status(403).json({
                    success: 0,
                    error: 'invaild username or password'
                });
            } 
        });
          
    }).catch(() => {
        res.status(403).json({
            success: 0,
            error: 'server error!'
        });
    });
});

// change name or information
router.put("/account/:id", verifyToken, function(req, res, next) {
    jwt.verify(req.token, 'secretKey', (err, authData) => {
        
        if(err) {
            console.log(err);
            res.status(403).json({
                success: 0,
                error: err
            });
        } else {
            // doing logic
            var newInfo = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                nickName: req.body.nickName,
                email: req.body.email,
                // password: req.body.password
            };

            User.findOneAndUpdate({_id: req.params.id}, newInfo).then(function() {
                res.send({ success: 1,
                            user: newInfo });
            }).catch(() => {
                res.status(403).json({
                    success: 0,
                    error: 'server error!'
                });
            });
        }
    
    });

    // doing logic
    // var newInfo = {
    //     firstName: req.body.firstName,
    //     lastName: req.body.lastName,
    //     nickName: req.body.nickName,
    //     email: req.body.email,
    //     password: req.body.password
    // };

    // User.findOneAndUpdate({_id: req.params.id}, newInfo).then(function() {
    //     res.send({ success: 1,
    //                 user: newInfo });
    // }).catch(() => {
    //     res.status(403).json({
    //         success: 0,
    //         error: 'server error!'
    //     });
    // });
    
});

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.status(403).json({
            success: 0,
            error: 'Token error!'
        });
    }
}

module.exports = router;
