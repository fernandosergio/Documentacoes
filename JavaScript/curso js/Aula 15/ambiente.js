let num = [5, 8, 7]

console.log(num)
num[3] = 6 // adiciona um elemento no indice 3
num.push(7) // adiciona um elemento no ultimo indice
num.length // diz o comprimento

for (let pos in num) {
    console.log(num[pos])
}