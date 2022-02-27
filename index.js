const express = require("express");
const Router = require("./Routes/Router")

require('dotenv').config()

const app = express()


app.use(express.json())
app.use(Router)



const Port = 6000


app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`)
})