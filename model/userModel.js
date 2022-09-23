const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username: {
        type : 'String',
        trim : true,
        unique : true
    },
    email: {
        type : 'String',
        trim : true,
        unique: true
    },
    password : {
        type: 'String',
        required : true,
        trim: true
    }
});

module.exports = mongoose.model('User',UserSchema)