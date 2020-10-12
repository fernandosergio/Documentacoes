import ClassPerson from './class/classPerson.js'

let person = new ClassPerson()

person.setPerson('Thiago', 18)
document.querySelector('body').append(person.getData())