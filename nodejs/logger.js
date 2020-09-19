const eventEmmiter = require('events') // Chama o events do node

const emmiter = new eventEmmiter // Copia a classe eventEmmiter do node para o emmiter

const fs = require('fs') // Chama o modulo do node fs(filesystem)
const path = require('path') // chama o modulo path do node

// 

// .join vai pegar o caminho independente do OS, __dirname é uma variavel global que pega o caminho



emmiter.on('log', (message) => {
    fs.appendFile(path.join(__dirname, 'log.txt'), message, (err) => {
        if (err) throw err
    })
})

function log(message) {

    emmiter.emit('log', message)
}

// log("OPA")

// log("EAE VEI")

module.exports = log