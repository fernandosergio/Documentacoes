$(document).ready(function() {
    $("#txtCep").focusout(function() {
        var cep = $("#txtCep").val();
        cep = cep.replace("-", "");

        var urlStr = "https://viacep.com.br/ws/" + cep + "/json";
        $.ajax({
            url: urlStr,
            type: "get",
            dataType: "json",
            success: function(data) {
                $("#txtCid").val(data.localidade);
                $("#txtEst").val(data.uf);
                $("#txtBar").val(data.bairro);
                $("#txtRua").val(data.logradouro);
                $("#txtCom").val(data.complemento);

            },
            error: function(erro) {
                console.log(erro)
            }
        });
    });
});