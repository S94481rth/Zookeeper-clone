const express = require("express")
const cors = require("cors")
require("dotenv").config()
const PORT = process.env.PORT

const app = express()

app.use(cors())
app.use(express.json())

const receiveHeartbeatRoutes = require('./server/routes/receiveHeartbeatRoutes') 
app.use('/beat', receiveHeartbeatRoutes)


const fn = require("./server/utilities/sendServersToRP").fn
setInterval(fn, 1000)

const Servers = require("./server/utilities/Servers")

app.listen(PORT, () => {
    new Servers()
    console.log(`Listening on the port number ${PORT}`)
})