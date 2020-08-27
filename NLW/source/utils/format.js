const opcoes = [
    "Primeira opção",
    "Segunda opção",
    "Terceira opção"
]

const dias = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sabado"
]

// Funcionalidades

function getOpcoes(opcoesNumber) {
    const position = +opcoesNumber - 1
    return opcoes[position]
}

function converter(time) {
    const [hour, minutes] = time.split(':')
    return Number((hour * 60) + minutes)
}

module.exports = {
    opcoes,
    dias,
    getOpcoes,
    converter
}