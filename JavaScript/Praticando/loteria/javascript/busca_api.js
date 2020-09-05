var numeros = '';
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

        numeros = $("#txtNumeros").val();
        numeros = numeros.split(' ');

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
                }
                $("#numAcertados").text(acertados);
                $("#numErrados").text(errados);
                $("#numAcertadosTotal").text(acertados.length);
            },
            error: function(error) {
                console.log('Não entrou ' + error)
            }
        })
    })
})

// 03 06 10 17 34 37