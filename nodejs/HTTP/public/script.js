const ul = document.querySelector("ul")
const input = document.querySelector("input")
const form = document.querySelector('form')
var quantidade = 0


async function load() {
    const res = await fetch("http://localhost:3000/").then((data) => data.json())

    res.urls.map(({ name, url }) => addElement({ name, url }))
}

load()


function addElement({ name, url }) {
    const li = document.createElement('li')
    const a = document.createElement("a")
    const trash = document.createElement("span")
    quantidade++

    a.href = url
    a.innerHTML = name
    a.id = quantidade
    a.target = "_blank"

    trash.innerHTML = "x"
    trash.className = quantidade
    trash.onclick = () => removeElement(trash)

    li.append(a)
    li.append(trash)
    ul.append(li)


}

async function removeElement(el) {

    if (confirm('Tem certeza que deseja deletar?')) {
        var identificador = el.className
        const as = document.querySelectorAll('a')
        const elemento = as[identificador - 1]
        const name = elemento.innerHTML
        let url = elemento.href
        url = url.substr(0, url.length - 1)

        const remover = `http://localhost:3000/?name=${name}&url=${url}&del=1`
        fetch(remover)
        el.parentNode.remove()
        quantidade--
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let { value } = input

    if (!value)
        return alert('Preencha o campo')

    const [name, url] = value.split(",")

    if (!url)
        return alert('formate o texto da maneira correta')

    if (/^http/.test(url)) {
        return alert("Digite a url da maneira correta")
    }

    addElement({ name, url })

    const adiciona = `http://localhost:3000/?name=${name}&url=${url}`
    fetch(adiciona)

    input.value = ""
})