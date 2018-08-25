const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

// finish auth and crypt password in the future

// UserSchema.methods.generateHash = function(password){
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// UserSchema.methods.validPassword = function(password){
//     return bcrypt.compareSync(password, this.password);
// };

const User = mongoose.model('user', UserSchema);

module.exports = User;
