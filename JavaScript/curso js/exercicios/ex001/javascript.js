var lista = []
var res = window.document.getElementById('res')

function entrada() {
    let n = window.document.getElementById('nmr')
    let num = Number(n.value)
    let painel = window.document.getElementById('painel')
    let div = window.document.getElementById('res')

    if (num < 1 || num > 100) {
        window.alert('Número inválido')
        n.value = ''
    } else {
        res.innerHTML = ''
        n.value = ''
        lista.push(num)
        let item = document.createElement('option')
        item.text += `Valor ${num} adicionado.`
        item.value = `painel${num}`
        painel.appendChild(item)
    }
}

function calcular() {
    let tam = lista.length
    let cres = lista.sort()
    let soma = 0

    if (tam == 0) {
        window.alert('Não foram adicionados valores!')
    } else {
        for (let c in lista) {
            soma = soma + lista[c]
        }
        let media = soma / lista.length
        res.innerHTML += `<p>Ao todo, temos ${tam} números adicionados.</p>`
        res.innerHTML += `<p>O maior número informado foi ${lista[tam - 1]}.</p>`
        res.innerHTML += `<p>O menor número informado foi ${lista[0]}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p> A média dos valores digitados é ${media}.</p>`
    }
}