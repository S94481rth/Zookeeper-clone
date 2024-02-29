const Servers = require("../utilities/Servers")
const Server = require("../utilities/Server")


exports.receiveHeartbeatController = (req,res) => {
    const servers = new Servers()
    const ip = req.body.ip
    const port = req.body.port
    const server = new Server(ip, port)
    servers.insertServer(server)
    servers.displayServers()
    servers.resetServers()

    res.end("you hit me! im bleeding!")
}