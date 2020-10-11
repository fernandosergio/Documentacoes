import Express from 'express'

import products from './products'

const app = Express()
const port = 3000

app.get('/', (req, res) => {
    res.json(products)
})

// app.post()

// app.put()

// app.delete()

app.listen(port, () => console.log("Servidor iniciado"))