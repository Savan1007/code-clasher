const mongoose = require("mongoose")

const questionSchema = new mongoose.Schema({
    questionName: {
        type: String,
        require: true,
    },
    probStatement: {
        type: String,
        required: true,
    },
    input: {
        type: String,
        required: true,
    },
    output: {
        type: String,
        required: true,
    },
    testcase: {
        type: {},
    },
    editorialId: {
        type: String,
        required: true,
    },
    explanation: {
        type: String,
        retuired: true,
    }
})

const question = mongoose.model("question", questionSchema)
module.exports = question

