var counter = 10
var work = document.getElementById('work')

function start() {
    if (counter >= 0) {
        counter--
        if (counter == 0) {
            counter = "Pronto"
        } else if (counter < 10) {
            counter = "0" + counter
        }
        work.innerHTML = counter
        setTimeout('start()', 1000)
    }
}