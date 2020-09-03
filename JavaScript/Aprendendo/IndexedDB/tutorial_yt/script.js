// qID, questionText, correctAnswer, studentAnswer, result

// Abre o indexedDB
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB

// Verifica se conseguiu abrir o indexedDB em caso de não ter compatibilidade
if (!window.indexedDB) {
    alert('não deu')
}

// Cria um database novo chamado QuizQuestDatabase versão 1 e variaveis sem valores
let request = window.indexedDB.open('QuizQuestDatabase', 1),
    db,
    tx,
    store,
    index;

// Caso precise dar upgrade 
request.onupgradeneeded = function(event) {
    // A store define a estrutura dos dados
    // Seta o valor de db e cria um Store com o db atraves do metodo createObjectStore passando o nome e a key do database
    let db = request.result,
        /* Escolher a key que quer passar*/
        store = db.createObjectStore('QuestionsStore', {
            keyPath: "qID"
        }),
        /* Depois de criar um store pode criar um indice, tem que passar o que vai chamar, o que está se baseando e pode adicionar informação dizendo se é unico ou não */
        index = store.createIndex('questionText', 'questionText', { unique: false })
        // store = db.createObjectStore('QuestionStore', { autoIncrement: true }) // Caso queria que seja auto incrementada
}

// Caso de erro aparece no console
request.onerror = function(event) {
    console.log('Error: ' + event.target.errorCode)
}

// É ele que tamo buscando
request.onsuccess = function(event) {
    db = request.result // Salva o resquest no db
    tx = db.transaction("QuestionsStore", "readwrite") /* vai pegar o QuestionsStore e depois dizer que pode ler e escrever */
    store = tx.objectStore("QuestionsStore") /* pegar referencia ao store */
    index = store.index("questionText") /* pegar referencia ao index */

    db.onerror = function(event) {
            console.log('Deu erro: ' + event.target.errorCode)
        } // caso de erro 

    //store.put({ qID: 1, questionText: "The sky is blue.", correcAnswer: true, strudentAnswer: true, result: true }) // adiciona dados 

    //store.put({ qID: 2, questionText: "The grass is green.", correcAnswer: true, strudentAnswer: true, request: true })

    let q1 = store.get(1) // pegar o que tiver na key 1
    let qs = index.get("The grass is green.")
    q1.onsuccess = function() {
        console.log(q1.result)
        console.log(q1.result.questionText)
    }

    qs.onsuccess = function() {
        console.log(qs.result.questionText)
    }

    tx.oncomplete = function() {
            db.close
        } // Fechando o database
}

/* Passos

Primeiro tem que garantir que tem compatibilidade com indexDB l:4

Então criar varias variaveis, request está abrindo o DB e então está preenchendo as outras(db, tx, store e index) l:12

Se é a primeira vez que acessou ou tem outra versão precisa garantir que tem os dados com um evento l:19

No upgradeneeded cria um store e um index l:22-28

Verificar se não tem erros l:33

Então finalmente, no onsuccess é aonde a magia acontece l:38

Pra por dados usa var.put()

E tem que fechar o database l:63
*/