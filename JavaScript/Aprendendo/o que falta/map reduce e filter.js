// map percorre a coleção e gera valores alterados em cima dos valores

const produtos = [{
        nome: "notebook",
        preco: 2100
    },
    {
        nome: "smartphone",
        preco: 400
    }
]

const reais = produtos.map(p => p.preco * 4)
console.log(reais)
console.log(produtos)

// nao meche na lista original

// reduce reduz uma lista pra uma lista menor

const products = [{
        nome: "notebook",
        preco: 2100
    },
    {
        nome: "smartphone",
        preco: 400
    }
]

// const total = products.reduce((acumulador, item) => {
//     acumulador = item.preco
// }, 0)

const total = products.map(p => p.preco * 4).reduce((acumulador, item) => {
    acumulador + item
}, 0)

console.log(total)

// filter filtra '-'

const arr = [1, 3, 6, 2, 7, 3, 4, 1, 3, 6, 34, 2, 124, 23, 212]

// tira os repitidos
const novarr = arr.filter((elem, index, arr) => arr.indexOf(elem) === index)

console.log(novarr)