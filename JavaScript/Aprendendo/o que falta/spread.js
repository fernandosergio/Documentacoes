// pode usar em array e objeto

let arr1 = [1, 2, 3, 4, 5]

let arr2 = [6, 7, 8, 9]

// let novaArray = [arr1, arr2]
// junta as duas arrays porem fica duas arrays numa array

let novaArray = [...arr1, ...arr2]
    // uso spred, cria uma nova array

let obj1 = {
    name: "Fernando"
}

let obj2 = {
    lastName: "Almeida"
}

let novoObj = {...obj1, ...obj2 }
    // cria um novo objeto com as duas propriedades