function calcular() {
    let num = window.document.getElementById('ent')
    let tab = window.document.getElementById('tab')
    if (num.value.length == 0) {
        window.alert('Por favor digite o número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = ` ${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}