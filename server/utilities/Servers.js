const Server = require('./Server')

class Servers{
    constructor(){
        if(!Servers.instance){
            // console.log("yo")
            this.servers = []
            Servers.instance = this
        }
        return Servers.instance
    }

    insertServer(server){
        this.servers.push(server)
    }

    resetServers(){
        this.servers = []
    }

    displayServers(){
        for(let server of this.servers){
            console.log(server)
        }
    }
}



module.exports = Servers