const express = require("express");
const TwitchChat = require('./Controllers/twitchChat');
const Cheermotes = require("./Controllers/getCheermotes");


require('dotenv').config()

const app = express()


app.use(express.json())


TwitchChat()
Cheermotes()

const Port = 6000


app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`)
})