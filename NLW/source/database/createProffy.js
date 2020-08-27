module.exports = async function(db, { listaValue, diasValue, dias_scheduleValues }) {
    //inserir dados na tabela
    const insertedLista = await db.run(`
        INSERT INTO lista (
            name,
            age
        ) VALUES (
            "${listaValue.name}",
            "${listaValue.age}"
        );
    `)

    const listaId = insertedLista.lastID

    // inserir dados na tabela dias

    const insertedDias = await db.run(`
            INSERT INTO dias (
                city,
                hour,
                day,
                selec,
                list_id
            ) VALUES (
                "${diasValue.city}",
                "${diasValue.hour}",
                "${diasValue.day}",
                "${diasValue.selec}",
                "${listaId}"
            );
    `)

    const list_id = insertedDias.lastID

    //inserir dados na dias_schedule
    const insertedAlldias_schedulesVales = dias_scheduleValues.map((value) => {
        return db.run(`
        INSERT INTO dias_schedule (
            dias_id,
            hour,
            day,
            time_from,
            time_to
        ) VALUES (
            "${list_id}",
            "${value.hour}",
            "${value.day}",
            "${value.time_from}",
            "${value.time_to}"
        );
        `)
    })

    await Promise.all(insertedAlldias_schedulesVales)

}