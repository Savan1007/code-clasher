const mongoose = require('mongoose')
require('dotenv').config() 

const conn = mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Connected to database")
})

module.exports = conn