const express = require("express")
require('dotenv').config() 
const App = express()
const PORT = process.env.PORT || PORT
const conn = require("./ConnectDB/db")
const cors = require('cors');

App.use(express.json());
App.use(cors())

App.use("/api/auth", require("./Routes/auth"))

App.get('/', async (req, res) =>{
    res.send("API is running")
})

App.listen(PORT)