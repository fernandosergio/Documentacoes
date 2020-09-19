const http = require('http') // Chama o http pra criar as rotas
const fs = require('fs') // chama o filesystem pra servir o html
const path = require('path') // chama o path pra mostrar o caminho

http.createServer((req, res) => {

        const file = req.url === '/' ? 'index.html' : req.url // faz o caminho do /
        const filePath = path.join(__dirname, 'public', file) // define o caminho do index.html
        const extName = path.extname(filePath) // pega o tipo de extensão do arquivos ex: .js

        const allowedFileTypes = ['.html', '.css', '.js'] // fala os tipos de arquivos permitidos
        const allowed = allowedFileTypes.find((item) => item == extName) // Verifica se a extensao existe nas extensoes permitidas

        if (!allowed) return

        fs.readFile(
                filePath,
                (err, content) => {
                    if (err) throw err

                    res.end(content)
                }
            ) // le o arquivo index.html ou mostra mensagem de erro

    }).listen(5000, () => console.log('Server is running')) // Cria o server na porta 5000 e printa no console

/* 
Pra melhorar:
Exluir do banco de dados atraves do frontend
Adicionar ao banco de dados atraves do frontend
*/