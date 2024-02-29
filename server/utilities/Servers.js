const Server = require('./Server')
const { v4: uuidv4 } = require('uuid');

class Servers{
    constructor(){
        if(!Servers.instance){
            console.log("yo")
            
            this.servers = []
            this.secondVariable = uuidv4()
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
        let count = 0 
        for(let server of this.servers){
            count++
            console.log(server)
        }
        console.log(count)
    }

    getServers(a){
        if(a == 1){
            // console.log(this.servers[0].ip)
        }
        return this.servers
    }
    
    reshapeServers(){
        this.secondVariable = uuidv4()
    }

    exists(server){
        for(let s of this.servers){
            if(s.ip === server.ip && s.port === server.port){
                return true;
            }
        }
        return false;
    }
}

// const s1 = new Servers();
// s1.insertServer(new Server(11,12))
// s1.insertServer(new Server(12,12))
// s1.insertServer(new Server(13,12))
// s1.insertServer(new Server(14,12))

// s1.displayServers()

// console.log("----------------------")
// const s2 = new Servers()
// s2.displayServers()

// const servers = new Servers()
// servers.insertServer(new Server(11,22))
// const server1 = new Servers()

// console.log(servers === server1)
module.exports = Servers