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

                if (i < 10) {
                    $('#numAposta').append(`<input type="checkbox" value="${'0'+i}"id="bolinha${i}">`)
                    $('head').append(`<style>#bolinha${i}:before {content: '${'0'+i}'}`)
                } else {
                    $('#numAposta').append(`<input type="checkbox" value="${i}"id="bolinha${i}">`)
                    $('head').append(`<style>#bolinha${i}:before {content: '${i}'}`)
                }

            }
        } else {
            divAposta.innerHTML = 'Selecione um concurso!'
        }
    })
    var inputs = document.querySelectorAll('input[type="checkbox"]:checked')
    $('input[type="checkbox"]').click(function() {
        alert('opa click')
    })
    $(document).find('input[type="checkbox"]').each(function() {
        if ($(this).prop("checked") == "checked") {
            alert('opa')
        }
    })

})