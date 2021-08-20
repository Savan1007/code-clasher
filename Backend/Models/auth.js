const mongoose = require("mongoose")

const authSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

const auth = mongoose.model("auth", authSchema)
module.exports = auth

