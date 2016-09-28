$(document).ready( function() {
   /* Executa a requisição quando o campo CEP perder o foco */
   $('#cep').blur(function(){
           /* Configura a requisição AJAX */
           $.ajax({
                url : 'consultarCEP.php', /* URL que será chamada */
                type : 'POST', /* Tipo da requisição */
                data: 'cep=' + $('#cep').val(), /* dado que será enviado via POST */
                dataType: 'json', /* Tipo de transmissão */
                success: function(data){
                    if(data.sucesso == 1){
                        $('#endereco').val(data.endereco);
                        //$('#bairro').val(data.bairro);
                        //$('#cidade').val(data.cidade);
                        //$('#estado').val(data.estado);
                        //$('#estado').val().remove();

                        $('#estado').html("<option data-tokens=" + data.estado + " value=" + data.estado + " selected>" + data.estado + "</option>");
                        $('#cidade').html("<option data-tokens=" + data.estado + " value=" + data.estado + " selected>" + data.cidade + "</option>");
                        $('#bairro').html("<option data-tokens=" + data.estado + " value=" + data.estado + " selected>" + data.bairro + "</option>");
console.log("<option data-tokens=" + data.estado + " value=" + data.estado + " selected>" + data.estado + "</option>");
                        $('#numero').focus();
                    }
                }
           });
   return false;
   })
});
