const database = require('./database/db')

const { opcoes, dias, getOpcoes, converter } = require('./utils/format')


function pageIndex(req, res) {


    return res.render("index.html", )
}

async function pageOutra(req, res) {
    const filters = req.body

    if (!filters.selec || !filters.day || !filters.hour) {

        return res.render("outra.html", { filters, opcoes, dias })
    }

    const HtoM = converter(filters.hour)

    const query = `
        SELECT dias.*, lista.*
        FROM lista
        JOIN dias ON (dias.list_id = lista.id)
        WHERE EXISTS (
            SELECT dias_schedule.*
            FROM dias_schedule
            WHERE dias_schedule.dias_id = dias.id
            AND dias_schedule.day = ${filters.day}
            AND dias_schedule.time_from <= ${HtoM}
            AND dias_schedule.time_to < ${HtoM}
        )
        AND dias.selec = "${filters.selec}"
    `

    // caso haja erro na consulta
    try {
        const dab = await database
        const lista = await dab.all(query)

        return res.render('outra.html', { lista, filters, dias, opcoes })
    } catch (error) {
        console.log(error)
    }
}

function pageForm(req, res) {

    res.render("form.html", { opcoes, dias })
}

async function saveClasses(req, res) {
    const createLista = require('./database/createProffy')

    const listaValue = {
        name: req.body.name,
        agr: req.body.age
    }

    const diasValue = {
        city: req.body.city,
        hour: req.body.hour,
        day: req.body.day,
        selec: req.body.selec
    }

    const opa = [req.body]

    const dias_scheduleValues = opa.map(() => {
        return {
            hour: req.body.hour,
            day: req.body.day,
            time_from: converter(req.body.time_from),
            time_to: converter(req.body.time_to)
        }

    })

    try {
        const db = await database
        await createLista(db, { listaValue, diasValue, dias_scheduleValues })

        let queryString = "?selec=" + req.body.selec
        queryString += "?name=" + req.body.name
        queryString += "?age=" + req.body.age
        queryString += "?city=" + req.body.city
        queryString += "?hour=" + req.body.hour
        queryString += "?day=" + req.body.day
        queryString += "?selec=" + req.body.selec
        console.log(queryString)
        return res.redirect("/" + queryString)
    } catch (error) {
        console.log(error)
    }
}

module.exports = { pageIndex, pageOutra, pageForm, saveClasses }