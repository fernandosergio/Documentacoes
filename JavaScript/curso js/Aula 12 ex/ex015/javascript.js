function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('idd')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        res.innerHTML = idade + fsex
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'crianca-masculina.png')
            } else if (idade < 21) {
                //ADOLESCENTE
                img.setAttribute('src', 'jovem-masculina.png')
            } else if (idade < 60) {
                //ADULTO
                img.setAttribute('src', 'adulto-masculina.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'senhor-masculina.png')
            }
        } else {
            gen = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //CRIANCA
                img.setAttribute('src', 'crianca-feminino.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'jovem-feminino.png')
            } else if (idade < 60) {
                //ADULTO
                img.setAttribute('src', 'adulto-feminino.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'senhora-feminino.png')
            }
        }
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)
    }
}