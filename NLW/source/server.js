const { pageIndex, pageOutra, pageForm, saveClasses } = require("./pages")



// servidor
const express = require('express')
const server = express()

//configurar o nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('source/views', {
    express: server,
    noCache: true
})

server
//receber os dados do req.body
    .use(express.urlencoded({ extended: true }))

// configurar arquivos estáticos: css,scripts css
.use(express.static("css"))

// rotas de aplicação
.get("/", pageIndex)
    .get("/outra", pageOutra)
    .get("/form", pageForm)
    .post("/save-classes", saveClasses)

//start do server
.listen(5000)