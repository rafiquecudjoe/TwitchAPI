const express = require('express')
const TwitchChat = require('../Controllers/twitchChat')
const ChermotesController = require("../Controllers/getCheermotes")

const Router = express()




Router.get("/chat/:channelId/start", TwitchChat)

Router.get("/getChermotes",ChermotesController)



module.exports = Router