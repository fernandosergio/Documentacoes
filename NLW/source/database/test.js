const datab = require('./db')
const createLista = require('./createProffy')

datab.then(async(db) => {
    //Inserir dados

    listaValue = {
        name: "Fernando",
        age: "20"
    }

    diasValue = {
        city: "Colombo",
        hour: "20h",
        day: "3",
        selec: "2"
    }

    dias_scheduleValues = [{
        hour: 20,
        day: "3",
        time_from: "520",
        time_to: "1120"
    }]

    //createProffy
    await createLista(db, { listaValue, diasValue, dias_scheduleValues })

    //Consultar os dados inseridos

    //todos as listas
    //const selectedLista = await db.all("SELECT * FROM lista")
    //console.log(selectedLista)

    //consultar as classes de um determinado professor
    //e trazer jnto os dados do professor
    /*const SelectDiasandLista = await db.all(`
        SELECT dias.*, lista.*
        FROM lista
        JOIN dias ON (dias.list_id = lista.id)
        WHERE dias.list_id = 1;
    `)
        // console.log(SelectDiasandLista)
        // o horario que a pessoa trabalha é das 8h as 18h
        // o horario tem que ser menor ou igual a 8
        // o horario final tem qe ser acima

    const selectDiasSchedule = await db.all(`
        SELECT dias_schedule.*
        FROM dias_schedule
        WHERE dias_schedule.dias_id = "1"
        AND dias_schedule.day = "3"
        AND dias_schedule.time_from <= "520"
        AND dias_schedule.time_to < "1200"
    `)

    console.log(selectDiasSchedule)*/
})