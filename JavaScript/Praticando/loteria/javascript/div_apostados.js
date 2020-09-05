let quantidade = ''
var divAposta = document.getElementById('numAposta')

$(document).ready(function() {
    var quantidade = '';
    $('#selConcurso').change(function() {
        quantidade = this.children[this.selectedIndex].textContent
        quantidade = parseInt(quantidade, 10);
        if (quantidade) {
            divAposta.innerHTML = ''
            for (let i = 1; i <= quantidade; i++) {
                $('#numAposta').append(`<input type="checkbox" value="${i}"id="bolinha${i}">`)
                if (i < 10) {
                    $('head').append(`<style>#bolinha${i}:before {content: '${'0'+i}'}`)
                } else {
                    $('head').append(`<style>#bolinha${i}:before {content: '${i}'}`)
                }

            }
        } else {
            divAposta.innerHTML = 'Selecione um concurso!'
        }
    })
})