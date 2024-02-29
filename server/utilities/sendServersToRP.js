const axios = require('axios');
const Servers = require("./Servers");
require("dotenv").config()
const RATE_LIMITER_URL = process.env.RATE_LIMITER_URL

exports.fn = async() => {
    const servers = Servers.instance; // Access the existing instance of Servers
    // console.log(`this is the type of the server in special function ${typeof(servers)}`)
    // Check if the instance exists
    if (!servers) {
        console.error('Servers instance does not exist');
        return;
    }
    
    // console.log('Servers availability:');
    const data = await axios.post(RATE_LIMITER_URL, {
        arrayBody : JSON.stringify(servers.getServers(1))
    })
    console.log(`this is the data of a random thing just to confuse the life out of you : ${data}`)
    console.log(`yello beauty : ${servers.getServers(1)}`)
    console.log(`yello beauty : ${servers.secondVariable}`)

    servers.resetServers()
};