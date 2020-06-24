const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true,
        unique: true
    },
    password: {
        type: String
    },
    date: {
        type: Date,
        default:Date.now
    },
    avatar: {
    type: String
    },
});

module.exports = User = mongoose.model('user', UserSchema);