import classJob from './classJob.js' // import da classe

// exporta a classe e diz que extende a ClassJob
// extender significa que a classPerson esta relacionada a Classjob entao da pra usar os metodos da outra classes nessa

export default class ClassPerson extends classJob {

    constructor() {
        super() // chama o super pra se referir a outra classe
    }

    // metodo que define o nome e a idade
    setPerson(name, age) {
        this.name = name
        this.age = age
    }

    // getEmp da ClassPerson
    getEmp() {
        return 'get emp da classPerson'
    }

    // metodo que mostra os dados
    getData() {
        return 'O ' + this.name + ' possui ' + this.age + ' anos e trabalha na empresa ' + super.getEmp() + ' como ' + super.getFunc()
            // super se refere ao metodo da outra classe
            // se nao usar () retorna a funcao em si
    }

}