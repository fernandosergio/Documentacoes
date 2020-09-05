var numeros = [];
var acertados = [];
var errados = [];

$(document).ready(function() {
    $("#btnVerificar").click(function() {
        if (numeros.length) {
            acertados = []
            errados = []
            numeros = []
        }
        var concurso = $("#selConcurso").val();
        var numConcurso = $("#numConcurso").val();
        var token = "5LIZAjgs0EARozO"

        var inputs = document.querySelectorAll('input[type="checkbox"]:checked')

        if (diadesorte || lotofacil || lotomania || megasena || quina) {

            if (inputs.length) {

                for (let i = 0; i < inputs.length; i++) {
                    numeros[i] = inputs[i].value
                }

                var url = "https://apiloterias.com.br/app/resultado?loteria=" + concurso + "&token=" + token + "&concurso=" + numConcurso;

                $.ajax({
                    url,
                    type: "get",
                    dataType: "json",
                    success: function(data) {
                        var numResultado = data.dezenas

                        for (var i = 0; i < numeros.length; i++) {
                            if (numResultado.indexOf(numeros[i]) > -1) {
                                acertados.push(numeros[i]);
                            } else {
                                errados.push(numeros[i]);
                            }
                        };
                        $('input[type="checkbox"]:checked').prop('checked', false);
                        $("#numAcertados").text(acertados);
                        $("#numErrados").text(errados);
                        $("#numAcertadosTotal").text(acertados.length);
                    },
                    error: function(error) {
                        console.log('Não entrou ' + error)
                    }
                })
            } else {
                alert('Selecione algum número!')
            }
        } else {
            alert('Selecione um quantidade de números valida!')
        }
    })
})

// 03 06 10 17 34 37

let contador = ''

var diadesorte = false
var lotofacil = false
var lotomania = false
var megasena = false
var quina = false

$(document).on('change', 'input[type="checkbox"]:checked', function() {
    contador = contador + 1
    const filhos = document.getElementById('selConcurso')
    let opcao = filhos.children[filhos.selectedIndex].value
    if (opcao == 'diadesorte' && contador >= 7 && contador <= 15) {
        diadesorte = true
    } else {
        diadesorte = false
    }
    if (opcao == 'lotofacil' && contador >= 15 && contador <= 20) {
        lotofacil = true
    } else {
        lotofacil = false
    }
    if (opcao == 'lotomania' && contador == 50) {
        lotomania = true
    } else {
        lotomania = false
    }
    if (opcao == 'megasena' && contador >= 6 && contador <= 15) {
        megasena = true
    } else {
        megasena = false
    }
    if (opcao == 'quina' && contador >= 5 && contador <= 15) {
        quina = true
    } else {
        quina = false
    }
})