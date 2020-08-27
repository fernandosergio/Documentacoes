function verificar() {
    var inicio = window.document.getElementById('ini')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('pas')
    var resultado = window.document.getElementById('res')
    var ini = Number(inicio.value)
    var end = Number(fim.value)
    var anda = Number(passo.value)

    if (inicio.value == 0 || fim.value == 0) {
        //window.alert('Valores inválidos!')
        resultado.innerHTML = 'Impossível contar!'
    } // Verifica se o valor do inicio ou fim é 0 caso seja pede pra digitar de novo

    if (anda <= 0) {
        anda = 1
        window.alert('Passo não foi declado e será conseiderado igual a 1.')
        resultado.innerHTML += anda
    } // Verifica se o passo é igual 0, se for considera igual a 1


    if (ini < end) {
        resultado.innerHTML = "Contando: <br> "
        for (; ini <= end; ini += anda) {
            resultado.innerHTML += `${ini}\u{1F449}`
        } // Contagem crescente
    } else {
        resultado.innerHTML = "Contando: <br>"
        for (; ini >= end; ini -= anda) {
            resultado.innerHTML += `${ini}\u{1F449}`
        } // Contagem decrescente
    }
    resultado.innerHTML += `\u{1F3C1}`

}