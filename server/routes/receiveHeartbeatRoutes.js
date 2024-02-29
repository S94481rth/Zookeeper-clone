const routes = require("express").Router()


const receiveHeartbeatController = require('../controller/receiveHeartbeatController')
routes.post('/', receiveHeartbeatController.receiveHeartbeatController)

module.exports = routes