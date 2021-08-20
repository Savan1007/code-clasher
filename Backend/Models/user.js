const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
    },
    profilePic: {
        type: String,
    },
    star: {
        type: String,
    },
    pastGame: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Game',
    },
    frdList: {
        type: [],
    }
})

const user = mongoose.model("user", userSchema)
module.exports = user

