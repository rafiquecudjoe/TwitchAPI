const express = require("express");
const TwitchChat = require('./Controllers/twitchChat');
const GetCheermotes = require("./utils/utils")
let dgram = require('dgram')


let s = dgram.createSocket('udp4')


require('dotenv').config()

const app = express()


app.use(express.json())


TwitchChat()


// Send Cheermotes to UPD SERVER

const CheermotesController = async () => {
  
  try {
      const result = await GetCheermotes()
      
      const message = JSON.stringify(result)

  
    
s.send(Buffer.from(message),60001,'localhost')
    
  } catch (error) {
    console.log(error)
  }
 
}

CheermotesController()





const Port = 6000


app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`)
})