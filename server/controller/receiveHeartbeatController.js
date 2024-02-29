const Servers = require("../utilities/Servers")
const Server = require("../utilities/Server")


exports.receiveHeartbeatController = (req,res) => {
    const servers = Servers.instance
    // console.log(`type of servers else where : ${typeof(servers)}`)
    const ip = req.body.ip
    const port = req.body.port
    const server = new Server(ip, port)
    if(!servers.exists(server)){
        servers.insertServer(server)
    }
    // servers.displayServers()
    // console.log(servers.getServers(0))
    // console.log(servers.secondVariable)
    // servers.reshapeServers()
    
    res.end("you hit me! im bleeding!")
}


