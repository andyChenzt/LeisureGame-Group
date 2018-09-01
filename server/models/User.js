const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// user schema
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    nickName: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    },
    drawingGame: {
        times: {
            type: Number,
            default: 0
        },
        scores: [Number]
    },
    snakeGame: {
        times: {
            type: Number,
            default: 0
        },
        scores: [Number]
    }
    // isDeleted: {
    //     type: Boolean,
    //     default: false
    // }
});

// crypt password before save
UserSchema.pre('save', function(next) {
    const user = this;
    const SALT_FACTOR = 10;

    bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
        if(err) {
            return next(err);
        }
        bcrypt.hash(user.password, salt).then(function(hash) {
            user.password = hash;
            next();
        });
    });
});

// create validate password instance method
UserSchema.methods.validPassword = function(password, cb) {
    console.log("valid");
    console.log("before compare");
    console.log(password, this.password);
    bcrypt.compare(password, this.password, function(err, isMatch) {
        if(err) {
            return err;
        }
        console.log("after compare");
        console.log(password, this.password);
        console.log(isMatch);
        cb(err, isMatch);
    });
};

// create delete sensitive information instance method for deleting password before return json data
UserSchema.methods.deleteSensitiveInfo = function() {
    return {
        email: this.email,
        nickName: this.nickName,
        firstName: this.firstName,
        lastName: this.lastName,
        drawingGame: this.drawingGame,
        snakeGame: this.snakeGame
    };
};

const User = mongoose.model('user', UserSchema);

module.exports = User;
