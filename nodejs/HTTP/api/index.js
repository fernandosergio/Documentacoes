const http = require('http') // Chama o http pra criar as rotas
const data = require('./urls.json') // Chama o json
const URL = require('url') // chama o url
const fs = require('fs')
const path = require('path')

function writeFiles(cb) {
    fs.writeFile(
        path.join(__dirname, "urls.json"),
        JSON.stringify(data, null, 2),
        err => {
            if (err) throw err

            cb(JSON.stringify({ message: "ok" }))
        }
    )
}

// cria servidor pro json
http.createServer((req, res) => {

        const { name, url, del } = URL.parse(req.url, true).query // pega o name e url que ta do json, da query string

        res.writeHead(200, {
            'Access-Control-Allow-Origin': "*"
        })

        if (!name || !url)
            return res.end(JSON.stringify(data)) // caso não tenho name ou url na query string

        if (del) {

            data.urls = data.urls.filter(item => String(item.url) !== String(url))
            return writeFiles((message) => res.end(message))
        }

        data.urls.push({ name, url })

        return writeFiles((message) => res.end(message))
    }).listen(3000, () => console.log('Api is running')) // Cria o server na porta 5000 e printa no console