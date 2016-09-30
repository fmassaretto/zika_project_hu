$(document).ready(function(){
  var count = 2;
  $("#addSoro").click(function(){
    if (count == 2) {
      $("#segundaColetaSoro").append('<hr>');
      $("#segundaColetaSoro").append('<label>Data da Segunda Coleta:</label><input type="date" name="dtSegundaColetaSoro" id="dtSegundaColetaSoro" class="form-control"/>');
      $("#segundaColetaSoro").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelSegundoSoro" id="qtDiponivelSegundoSoro" min="0" max="100" class="form-control"/>');
      $("#segundaColetaSoro").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaSegundoSoro" id="qtUtilizadaSegundoSoro" min="0" max="100" class="form-control"/>');
      $("#segundaColetaSoro").append('<label>Caixa Número:</label><input type="number" name="caixaSegundoSoro" id="caixaSegundoSoro" min="0" max="500" class="form-control"/>');
      count++;
    }else if (count == 3) {
      $("#terceiraColetaSoro").append('<hr>');
      $("#terceiraColetaSoro").append('<label>Data da Terceira Coleta:</label><input type="date" name="dtTerceiraColetaSoro" id="dtTerceiraColetaSoro" class="form-control"/>');
      $("#terceiraColetaSoro").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelTerceiroSoro" id="qtDiponivelTerceiroSoro" min="0" max="100" class="form-control"/>');
      $("#terceiraColetaSoro").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaTerceiroSoro" id="qtUtilizadaTerceiroSoro" min="0" max="100" class="form-control"/>');
      $("#terceiraColetaSoro").append('<label>Caixa Número:</label><input type="number" name="caixaTerceiroSoro" id="caixaTerceiroSoro" min="0" max="500" class="form-control"/>');
      count++;
    }else if (count == 4) {
      $("#quartaColetaSoro").append('<hr>');
      $("#quartaColetaSoro").append('<label>Data da Quarta Coleta:</label><input type="date" name="dtQuartaColetaSoro" id="dtQuartaColetaSoro" class="form-control"/>');
      $("#quartaColetaSoro").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelQuartoSoro" id="qtDiponivelQuartoSoro" min="0" max="100" class="form-control"/>');
      $("#quartaColetaSoro").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaQuartoSoro" id="qtUtilizadaQuartoSoro" min="0" max="100" class="form-control"/>');
      $("#quartaColetaSoro").append('<label>Caixa Número:</label><input type="number" name="caixaQuartoSoro" id="caixaQuartoSoro" min="0" max="500" class="form-control"/>');
      count++;
    }else if (count == 5) {
      $("#quintaColetaSoro").append('<hr>');
      $("#quintaColetaSoro").append('<label>Data da Quinta Coleta:</label><input type="date" name="dtQuintaColetaSoro" id="dtQuintaColetaSoro" class="form-control"/>');
      $("#quintaColetaSoro").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelQuintoSoro" id="qtDiponivelQuintoSoro" min="0" max="100" class="form-control"/>');
      $("#quintaColetaSoro").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaQuintoSoro" id="qtUtilizadaSoro" min="0" max="100" class="form-control"/>');
      $("#quintaColetaSoro").append('<label>Caixa Número:</label><input type="number" name="caixaQuintoSoro" id="caixQuintoaSoro" min="0" max="500" class="form-control"/>');
      count++;
    }else if (count == 6) {
      $("#sextaColetaSoro").append('<hr>');
      $("#sextaColetaSoro").append('<label>Data da Sexta Coleta:</label><input type="date" name="dtSextaColetaSoro" id="dtSextaColetaSoro" class="form-control"/>');
      $("#sextaColetaSoro").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelSextoSoro" id="qtDiponivelSextoSoro" min="0" max="100" class="form-control"/>');
      $("#sextaColetaSoro").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaSextoSoro" id="qtUtilizadaSextoSoro" min="0" max="100" class="form-control"/>');
      $("#sextaColetaSoro").append('<label>Caixa Número:</label><input type="number" name="caixaSextoSoro" id="caixaSextoSoro" min="0" max="500" class="form-control"/>');
      count++;
      $("#addSoro").css("visibility", "hidden");
    }
  });
});
