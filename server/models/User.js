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

UserSchema.methods.validPassword = function(password) {
    bcrypt.compare(password, this.password).then(function(result, next) {
        console.log(password, this.password);
        console.log(result);
        // return result;
        next();
    });
};

UserSchema.methods.deleteSensitiveInfo = function() {
    next({
        email: this.email,
        nickName: this.nickName,
        firstName: this.firstName,
        lastName: this.lastName,
        drawingGame: this.drawingGame,
        snakeGame: this.snakeGame
    });
};


// UserSchema.methods.validPassword = function(password){
//     return bcrypt.compareSync(password, this.password);
// };

const User = mongoose.model('user', UserSchema);

module.exports = User;
