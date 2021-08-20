const mongoose = require("mongoose")

const editorialSchema = new mongoose.Schema({
    editorial: {
        type: String,
        require: true,
    }
})

const editorial = mongoose.model("editorial", editorialSchema)
module.exports = editorial

