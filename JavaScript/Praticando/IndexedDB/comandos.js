// Requisita um banco de dados
window.indexedDB.open('weather', I);

// Assincrono
request = window.indexedDB.open('bancoDeDados', versão)

request.onsuccess = function(event) {
    db = event.target.result;
}

/*
 Bibliotecas

 IndexedDB Promised https://www.npmjs.com/package/idb

 LocalForage http://localforage.github.io/local/Forage/

 Dexie.js https://dexie.org/
*/