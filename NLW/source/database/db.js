const database = require('sqlite-async')
module.exports = database.open(__dirname + "/database.sqlite").then(execute)

function execute(db) {
    //criar as tabelas do banco de dados
    return db.exec(`
        CREATE TABLE IF NOT EXISTS lista (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            age TEXT
        );

        CREATE TABLE IF NOT EXISTS dias (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            city TEXT,
            hour TEXT,
            day TEXT,
            selec INTEGER,
            list_id INTEGER
        );

        CREATE TABLE IF NOT EXISTS dias_schedule (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            dias_id INTEGER,
            hour TEXT,
            day TEXT,
            time_from TEXT,
            time_to TEXT
        );
    `)
}