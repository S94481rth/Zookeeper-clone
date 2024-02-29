const axios = require('axios')

const Servers = require("./Servers")
const servers = new Servers()

exports.fn = () =>{
    console.log(`this is the servers availability : ${servers.displayServers()}`)
}