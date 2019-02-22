const port = 3003

const bodyParce = require('body-parser')
const express = require('express')
const server = express()


server.use(bodyParce.urlencoded({extended:true}))
server.use(bodyParce.json())
server.listen(port, function(){
    console.log(`APP backend-projeto-tarefas" RUNNING !!!!! PORT:${port}.`)
})

module.exports = server

