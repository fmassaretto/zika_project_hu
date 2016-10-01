$(document).ready(function(){
  var countSoro = 2;
  var countPlasma = 2;
  var countSaliva = 2;
  var countUrina = 2;
  var countColostro = 2;
  var countLiquor = 2;
  var countPlacenta = 2;
  var countLiqAminiotico = 2;
  $("#addSoro").click(function(){
    if (countSoro == 2) {
      $("#segundaColetaSoro").append('<hr>');
      $("#segundaColetaSoro").append('<label>Data da Segunda Coleta:</label><input type="date" name="dtSegundaColetaSoro" id="dtSegundaColetaSoro" class="form-control"/>');
      $("#segundaColetaSoro").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelSegundoSoro" id="qtDiponivelSegundoSoro" min="0" max="100" class="form-control"/>');
      $("#segundaColetaSoro").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaSegundoSoro" id="qtUtilizadaSegundoSoro" min="0" max="100" class="form-control"/>');
      $("#segundaColetaSoro").append('<label>Caixa Número:</label><input type="number" name="caixaSegundoSoro" id="caixaSegundoSoro" min="0" max="500" class="form-control"/>');
      countSoro++;
    }else if (countSoro == 3) {
      $("#terceiraColetaSoro").append('<hr>');
      $("#terceiraColetaSoro").append('<label>Data da Terceira Coleta:</label><input type="date" name="dtTerceiraColetaSoro" id="dtTerceiraColetaSoro" class="form-control"/>');
      $("#terceiraColetaSoro").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelTerceiroSoro" id="qtDiponivelTerceiroSoro" min="0" max="100" class="form-control"/>');
      $("#terceiraColetaSoro").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaTerceiroSoro" id="qtUtilizadaTerceiroSoro" min="0" max="100" class="form-control"/>');
      $("#terceiraColetaSoro").append('<label>Caixa Número:</label><input type="number" name="caixaTerceiroSoro" id="caixaTerceiroSoro" min="0" max="500" class="form-control"/>');
      countSoro++;
    }else if (countSoro == 4) {
      $("#quartaColetaSoro").append('<hr>');
      $("#quartaColetaSoro").append('<label>Data da Quarta Coleta:</label><input type="date" name="dtQuartaColetaSoro" id="dtQuartaColetaSoro" class="form-control"/>');
      $("#quartaColetaSoro").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelQuartoSoro" id="qtDiponivelQuartoSoro" min="0" max="100" class="form-control"/>');
      $("#quartaColetaSoro").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaQuartoSoro" id="qtUtilizadaQuartoSoro" min="0" max="100" class="form-control"/>');
      $("#quartaColetaSoro").append('<label>Caixa Número:</label><input type="number" name="caixaQuartoSoro" id="caixaQuartoSoro" min="0" max="500" class="form-control"/>');
      countSoro++;
    }else if (countSoro == 5) {
      $("#quintaColetaSoro").append('<hr>');
      $("#quintaColetaSoro").append('<label>Data da Quinta Coleta:</label><input type="date" name="dtQuintaColetaSoro" id="dtQuintaColetaSoro" class="form-control"/>');
      $("#quintaColetaSoro").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelQuintoSoro" id="qtDiponivelQuintoSoro" min="0" max="100" class="form-control"/>');
      $("#quintaColetaSoro").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaQuintoSoro" id="qtUtilizadaSoro" min="0" max="100" class="form-control"/>');
      $("#quintaColetaSoro").append('<label>Caixa Número:</label><input type="number" name="caixaQuintoSoro" id="caixQuintoaSoro" min="0" max="500" class="form-control"/>');
      countSoro++;
    }else if (countSoro == 6) {
      $("#sextaColetaSoro").append('<hr>');
      $("#sextaColetaSoro").append('<label>Data da Sexta Coleta:</label><input type="date" name="dtSextaColetaSoro" id="dtSextaColetaSoro" class="form-control"/>');
      $("#sextaColetaSoro").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelSextoSoro" id="qtDiponivelSextoSoro" min="0" max="100" class="form-control"/>');
      $("#sextaColetaSoro").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaSextoSoro" id="qtUtilizadaSextoSoro" min="0" max="100" class="form-control"/>');
      $("#sextaColetaSoro").append('<label>Caixa Número:</label><input type="number" name="caixaSextoSoro" id="caixaSextoSoro" min="0" max="500" class="form-control"/>');
      countSoro++;
      $("#addSoro").css("visibility", "hidden");
    }
  });

  $("#addPlasma").click(function(){
    if (countPlasma == 2) {
      $("#segundaColetaPlasma").append('<hr>');
      $("#segundaColetaPlasma").append('<label>Data da Segunda Coleta:</label><input type="date" name="dtSegundaColetaPlasma" id="dtSegundaColetaPlasma" class="form-control"/>');
      $("#segundaColetaPlasma").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelSegundoPlasma" id="qtDiponivelSegundoPlasma" min="0" max="100" class="form-control"/>');
      $("#segundaColetaPlasma").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaSegundoPlasma" id="qtUtilizadaSegundoPlasma" min="0" max="100" class="form-control"/>');
      $("#segundaColetaPlasma").append('<label>Caixa Número:</label><input type="number" name="caixaSegundoPlasma" id="caixaSegundoPlasma" min="0" max="500" class="form-control"/>');
      countPlasma++;
    }else if (countPlasma == 3) {
      $("#terceiraColetaPlasma").append('<hr>');
      $("#terceiraColetaPlasma").append('<label>Data da Terceira Coleta:</label><input type="date" name="dtTerceiraColetaPlasma" id="dtTerceiraColetaPlasma" class="form-control"/>');
      $("#terceiraColetaPlasma").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelTerceiroPlasma" id="qtDiponivelTerceiroPlasma" min="0" max="100" class="form-control"/>');
      $("#terceiraColetaPlasma").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaTerceiroPlasma" id="qtUtilizadaTerceiroPlasma" min="0" max="100" class="form-control"/>');
      $("#terceiraColetaPlasma").append('<label>Caixa Número:</label><input type="number" name="caixaTerceiroPlasma" id="caixaTerceiroPlasma" min="0" max="500" class="form-control"/>');
      countPlasma++;
    }else if (countPlasma == 4) {
      $("#quartaColetaPlasma").append('<hr>');
      $("#quartaColetaPlasma").append('<label>Data da Quarta Coleta:</label><input type="date" name="dtQuartaColetaPlasma" id="dtQuartaColetaPlasma" class="form-control"/>');
      $("#quartaColetaPlasma").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelQuartoPlasma" id="qtDiponivelQuartoPlasma" min="0" max="100" class="form-control"/>');
      $("#quartaColetaPlasma").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaQuartoPlasma" id="qtUtilizadaQuartoPlasma" min="0" max="100" class="form-control"/>');
      $("#quartaColetaPlasma").append('<label>Caixa Número:</label><input type="number" name="caixaQuartoPlasma" id="caixaQuartoPlasma" min="0" max="500" class="form-control"/>');
      countPlasma++;
    }else if (countPlasma == 5) {
      $("#quintaColetaPlasma").append('<hr>');
      $("#quintaColetaPlasma").append('<label>Data da Quinta Coleta:</label><input type="date" name="dtQuintaColetaPlasma" id="dtQuintaColetaPlasma" class="form-control"/>');
      $("#quintaColetaPlasma").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelQuintoPlasma" id="qtDiponivelQuintoPlasma" min="0" max="100" class="form-control"/>');
      $("#quintaColetaPlasma").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaQuintoPlasma" id="qtUtilizadaPlasma" min="0" max="100" class="form-control"/>');
      $("#quintaColetaPlasma").append('<label>Caixa Número:</label><input type="number" name="caixaQuintoPlasma" id="caixQuintoaPlasma" min="0" max="500" class="form-control"/>');
      countPlasma++;
    }else if (countPlasma == 6) {
      $("#sextaColetaPlasma").append('<hr>');
      $("#sextaColetaPlasma").append('<label>Data da Sexta Coleta:</label><input type="date" name="dtSextaColetaPlasma" id="dtSextaColetaPlasma" class="form-control"/>');
      $("#sextaColetaPlasma").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelSextoPlasma" id="qtDiponivelSextoPlasma" min="0" max="100" class="form-control"/>');
      $("#sextaColetaPlasma").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaSextoPlasma" id="qtUtilizadaSextoPlasma" min="0" max="100" class="form-control"/>');
      $("#sextaColetaPlasma").append('<label>Caixa Número:</label><input type="number" name="caixaSextoPlasma" id="caixaSextoPlasma" min="0" max="500" class="form-control"/>');
      countPlasma++;
      $("#addPlasma").css("visibility", "hidden");
    }
  });

  $("#addSaliva").click(function(){
    if (countSaliva == 2) {
      $("#segundaColetaSaliva").append('<hr>');
      $("#segundaColetaSaliva").append('<label>Data da Segunda Coleta:</label><input type="date" name="dtSegundaColetaSaliva" id="dtSegundaColetaSaliva" class="form-control"/>');
      $("#segundaColetaSaliva").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelSegundoSaliva" id="qtDiponivelSegundoSaliva" min="0" max="100" class="form-control"/>');
      $("#segundaColetaSaliva").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaSegundoSaliva" id="qtUtilizadaSegundoSaliva" min="0" max="100" class="form-control"/>');
      $("#segundaColetaSaliva").append('<label>Caixa Número:</label><input type="number" name="caixaSegundoSaliva" id="caixaSegundoSaliva" min="0" max="500" class="form-control"/>');
      countSaliva++;
    }else if (countSaliva == 3) {
      $("#terceiraColetaSaliva").append('<hr>');
      $("#terceiraColetaSaliva").append('<label>Data da Terceira Coleta:</label><input type="date" name="dtTerceiraColetaSaliva" id="dtTerceiraColetaSaliva" class="form-control"/>');
      $("#terceiraColetaSaliva").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelTerceiroSaliva" id="qtDiponivelTerceiroSaliva" min="0" max="100" class="form-control"/>');
      $("#terceiraColetaSaliva").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaTerceiroSaliva" id="qtUtilizadaTerceiroSaliva" min="0" max="100" class="form-control"/>');
      $("#terceiraColetaSaliva").append('<label>Caixa Número:</label><input type="number" name="caixaTerceiroSaliva" id="caixaTerceiroSaliva" min="0" max="500" class="form-control"/>');
      countSaliva++;
    }else if (countSaliva == 4) {
      $("#quartaColetaSaliva").append('<hr>');
      $("#quartaColetaSaliva").append('<label>Data da Quarta Coleta:</label><input type="date" name="dtQuartaColetaSaliva" id="dtQuartaColetaSaliva" class="form-control"/>');
      $("#quartaColetaSaliva").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelQuartoSaliva" id="qtDiponivelQuartoSaliva" min="0" max="100" class="form-control"/>');
      $("#quartaColetaSaliva").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaQuartoSaliva" id="qtUtilizadaQuartoSaliva" min="0" max="100" class="form-control"/>');
      $("#quartaColetaSaliva").append('<label>Caixa Número:</label><input type="number" name="caixaQuartoSaliva" id="caixaQuartoSaliva" min="0" max="500" class="form-control"/>');
      countSaliva++;
    }else if (countSaliva == 5) {
      $("#quintaColetaSaliva").append('<hr>');
      $("#quintaColetaSaliva").append('<label>Data da Quinta Coleta:</label><input type="date" name="dtQuintaColetaSaliva" id="dtQuintaColetaSaliva" class="form-control"/>');
      $("#quintaColetaSaliva").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelQuintoSaliva" id="qtDiponivelQuintoSaliva" min="0" max="100" class="form-control"/>');
      $("#quintaColetaSaliva").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaQuintoSaliva" id="qtUtilizadaSaliva" min="0" max="100" class="form-control"/>');
      $("#quintaColetaSaliva").append('<label>Caixa Número:</label><input type="number" name="caixaQuintoSaliva" id="caixQuintoaSaliva" min="0" max="500" class="form-control"/>');
      countSaliva++;
    }else if (countSaliva == 6) {
      $("#sextaColetaSaliva").append('<hr>');
      $("#sextaColetaSaliva").append('<label>Data da Sexta Coleta:</label><input type="date" name="dtSextaColetaSaliva" id="dtSextaColetaSaliva" class="form-control"/>');
      $("#sextaColetaSaliva").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelSextoSaliva" id="qtDiponivelSextoSaliva" min="0" max="100" class="form-control"/>');
      $("#sextaColetaSaliva").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaSextoSaliva" id="qtUtilizadaSextoSaliva" min="0" max="100" class="form-control"/>');
      $("#sextaColetaSaliva").append('<label>Caixa Número:</label><input type="number" name="caixaSextoSaliva" id="caixaSextoSaliva" min="0" max="500" class="form-control"/>');
      countSaliva++;
      $("#addSaliva").css("visibility", "hidden");
    }
  });

  $("#addUrina").click(function(){
    if (countUrina == 2) {
      $("#segundaColetaUrina").append('<hr>');
      $("#segundaColetaUrina").append('<label>Data da Segunda Coleta:</label><input type="date" name="dtSegundaColetaUrina" id="dtSegundaColetaUrina" class="form-control"/>');
      $("#segundaColetaUrina").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelSegundoUrina" id="qtDiponivelSegundoUrina" min="0" max="100" class="form-control"/>');
      $("#segundaColetaUrina").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaSegundoUrina" id="qtUtilizadaSegundoUrina" min="0" max="100" class="form-control"/>');
      $("#segundaColetaUrina").append('<label>Caixa Número:</label><input type="number" name="caixaSegundoUrina" id="caixaSegundoUrina" min="0" max="500" class="form-control"/>');
      countUrina++;
    }else if (countUrina == 3) {
      $("#terceiraColetaUrina").append('<hr>');
      $("#terceiraColetaUrina").append('<label>Data da Terceira Coleta:</label><input type="date" name="dtTerceiraColetaUrina" id="dtTerceiraColetaUrina" class="form-control"/>');
      $("#terceiraColetaUrina").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelTerceiroUrina" id="qtDiponivelTerceiroUrina" min="0" max="100" class="form-control"/>');
      $("#terceiraColetaUrina").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaTerceiroUrina" id="qtUtilizadaTerceiroUrina" min="0" max="100" class="form-control"/>');
      $("#terceiraColetaUrina").append('<label>Caixa Número:</label><input type="number" name="caixaTerceiroUrina" id="caixaTerceiroUrina" min="0" max="500" class="form-control"/>');
      countUrina++;
    }else if (countUrina == 4) {
      $("#quartaColetaUrina").append('<hr>');
      $("#quartaColetaUrina").append('<label>Data da Quarta Coleta:</label><input type="date" name="dtQuartaColetaUrina" id="dtQuartaColetaUrina" class="form-control"/>');
      $("#quartaColetaUrina").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelQuartoUrina" id="qtDiponivelQuartoUrina" min="0" max="100" class="form-control"/>');
      $("#quartaColetaUrina").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaQuartoUrina" id="qtUtilizadaQuartoUrina" min="0" max="100" class="form-control"/>');
      $("#quartaColetaUrina").append('<label>Caixa Número:</label><input type="number" name="caixaQuartoUrina" id="caixaQuartoUrina" min="0" max="500" class="form-control"/>');
      countUrina++;
    }else if (countUrina == 5) {
      $("#quintaColetaUrina").append('<hr>');
      $("#quintaColetaUrina").append('<label>Data da Quinta Coleta:</label><input type="date" name="dtQuintaColetaUrina" id="dtQuintaColetaUrina" class="form-control"/>');
      $("#quintaColetaUrina").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelQuintoUrina" id="qtDiponivelQuintoUrina" min="0" max="100" class="form-control"/>');
      $("#quintaColetaUrina").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaQuintoUrina" id="qtUtilizadaUrina" min="0" max="100" class="form-control"/>');
      $("#quintaColetaUrina").append('<label>Caixa Número:</label><input type="number" name="caixaQuintoUrina" id="caixQuintoaUrina" min="0" max="500" class="form-control"/>');
      countUrina++;
    }else if (countUrina == 6) {
      $("#sextaColetaUrina").append('<hr>');
      $("#sextaColetaUrina").append('<label>Data da Sexta Coleta:</label><input type="date" name="dtSextaColetaUrina" id="dtSextaColetaUrina" class="form-control"/>');
      $("#sextaColetaUrina").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelSextoUrina" id="qtDiponivelSextoUrina" min="0" max="100" class="form-control"/>');
      $("#sextaColetaUrina").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaSextoUrina" id="qtUtilizadaSextoUrina" min="0" max="100" class="form-control"/>');
      $("#sextaColetaUrina").append('<label>Caixa Número:</label><input type="number" name="caixaSextoUrina" id="caixaSextoUrina" min="0" max="500" class="form-control"/>');
      countUrina++;
      $("#addUrina").css("visibility", "hidden");
    }
  });

  $("#addColostro").click(function(){
    if (countColostro == 2) {
      $("#segundaColetaColostro").append('<hr>');
      $("#segundaColetaColostro").append('<label>Data da Segunda Coleta:</label><input type="date" name="dtSegundaColetaColostro" id="dtSegundaColetaColostro" class="form-control"/>');
      $("#segundaColetaColostro").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelSegundoColostro" id="qtDiponivelSegundoColostro" min="0" max="100" class="form-control"/>');
      $("#segundaColetaColostro").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaSegundoColostro" id="qtUtilizadaSegundoColostro" min="0" max="100" class="form-control"/>');
      $("#segundaColetaColostro").append('<label>Caixa Número:</label><input type="number" name="caixaSegundoColostro" id="caixaSegundoColostro" min="0" max="500" class="form-control"/>');
      countColostro++;
    }else if (countColostro == 3) {
      $("#terceiraColetaColostro").append('<hr>');
      $("#terceiraColetaColostro").append('<label>Data da Terceira Coleta:</label><input type="date" name="dtTerceiraColetaColostro" id="dtTerceiraColetaColostro" class="form-control"/>');
      $("#terceiraColetaColostro").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelTerceiroColostro" id="qtDiponivelTerceiroColostro" min="0" max="100" class="form-control"/>');
      $("#terceiraColetaColostro").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaTerceiroColostro" id="qtUtilizadaTerceiroColostro" min="0" max="100" class="form-control"/>');
      $("#terceiraColetaColostro").append('<label>Caixa Número:</label><input type="number" name="caixaTerceiroColostro" id="caixaTerceiroColostro" min="0" max="500" class="form-control"/>');
      countColostro++;
    }else if (countColostro == 4) {
      $("#quartaColetaColostro").append('<hr>');
      $("#quartaColetaColostro").append('<label>Data da Quarta Coleta:</label><input type="date" name="dtQuartaColetaColostro" id="dtQuartaColetaColostro" class="form-control"/>');
      $("#quartaColetaColostro").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelQuartoColostro" id="qtDiponivelQuartoColostro" min="0" max="100" class="form-control"/>');
      $("#quartaColetaColostro").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaQuartoColostro" id="qtUtilizadaQuartoColostro" min="0" max="100" class="form-control"/>');
      $("#quartaColetaColostro").append('<label>Caixa Número:</label><input type="number" name="caixaQuartoColostro" id="caixaQuartoColostro" min="0" max="500" class="form-control"/>');
      countColostro++;
    }else if (countColostro == 5) {
      $("#quintaColetaColostro").append('<hr>');
      $("#quintaColetaColostro").append('<label>Data da Quinta Coleta:</label><input type="date" name="dtQuintaColetaColostro" id="dtQuintaColetaColostro" class="form-control"/>');
      $("#quintaColetaColostro").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelQuintoColostro" id="qtDiponivelQuintoColostro" min="0" max="100" class="form-control"/>');
      $("#quintaColetaColostro").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaQuintoColostro" id="qtUtilizadaColostro" min="0" max="100" class="form-control"/>');
      $("#quintaColetaColostro").append('<label>Caixa Número:</label><input type="number" name="caixaQuintoColostro" id="caixQuintoaColostro" min="0" max="500" class="form-control"/>');
      countColostro++;
    }else if (countColostro == 6) {
      $("#sextaColetaColostro").append('<hr>');
      $("#sextaColetaColostro").append('<label>Data da Sexta Coleta:</label><input type="date" name="dtSextaColetaColostro" id="dtSextaColetaColostro" class="form-control"/>');
      $("#sextaColetaColostro").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelSextoColostro" id="qtDiponivelSextoColostro" min="0" max="100" class="form-control"/>');
      $("#sextaColetaColostro").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaSextoColostro" id="qtUtilizadaSextoColostro" min="0" max="100" class="form-control"/>');
      $("#sextaColetaColostro").append('<label>Caixa Número:</label><input type="number" name="caixaSextoColostro" id="caixaSextoColostro" min="0" max="500" class="form-control"/>');
      countColostro++;
      $("#addColostro").css("visibility", "hidden");
    }
  });

  $("#addLiquor").click(function(){
    if (countLiquor == 2) {
      $("#segundaColetaLiquor").append('<hr>');
      $("#segundaColetaLiquor").append('<label>Data da Segunda Coleta:</label><input type="date" name="dtSegundaColetaLiquor" id="dtSegundaColetaLiquor" class="form-control"/>');
      $("#segundaColetaLiquor").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelSegundoLiquor" id="qtDiponivelSegundoLiquor" min="0" max="100" class="form-control"/>');
      $("#segundaColetaLiquor").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaSegundoLiquor" id="qtUtilizadaSegundoLiquor" min="0" max="100" class="form-control"/>');
      $("#segundaColetaLiquor").append('<label>Caixa Número:</label><input type="number" name="caixaSegundoLiquor" id="caixaSegundoLiquor" min="0" max="500" class="form-control"/>');
      countLiquor++;
    }else if (countLiquor == 3) {
      $("#terceiraColetaLiquor").append('<hr>');
      $("#terceiraColetaLiquor").append('<label>Data da Terceira Coleta:</label><input type="date" name="dtTerceiraColetaLiquor" id="dtTerceiraColetaLiquor" class="form-control"/>');
      $("#terceiraColetaLiquor").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelTerceiroLiquor" id="qtDiponivelTerceiroLiquor" min="0" max="100" class="form-control"/>');
      $("#terceiraColetaLiquor").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaTerceiroLiquor" id="qtUtilizadaTerceiroLiquor" min="0" max="100" class="form-control"/>');
      $("#terceiraColetaLiquor").append('<label>Caixa Número:</label><input type="number" name="caixaTerceiroLiquor" id="caixaTerceiroLiquor" min="0" max="500" class="form-control"/>');
      countLiquor++;
    }else if (countLiquor == 4) {
      $("#quartaColetaLiquor").append('<hr>');
      $("#quartaColetaLiquor").append('<label>Data da Quarta Coleta:</label><input type="date" name="dtQuartaColetaLiquor" id="dtQuartaColetaLiquor" class="form-control"/>');
      $("#quartaColetaLiquor").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelQuartoLiquor" id="qtDiponivelQuartoLiquor" min="0" max="100" class="form-control"/>');
      $("#quartaColetaLiquor").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaQuartoLiquor" id="qtUtilizadaQuartoLiquor" min="0" max="100" class="form-control"/>');
      $("#quartaColetaLiquor").append('<label>Caixa Número:</label><input type="number" name="caixaQuartoLiquor" id="caixaQuartoLiquor" min="0" max="500" class="form-control"/>');
      countLiquor++;
    }else if (countLiquor == 5) {
      $("#quintaColetaLiquor").append('<hr>');
      $("#quintaColetaLiquor").append('<label>Data da Quinta Coleta:</label><input type="date" name="dtQuintaColetaLiquor" id="dtQuintaColetaLiquor" class="form-control"/>');
      $("#quintaColetaLiquor").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelQuintoLiquor" id="qtDiponivelQuintoLiquor" min="0" max="100" class="form-control"/>');
      $("#quintaColetaLiquor").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaQuintoLiquor" id="qtUtilizadaLiquor" min="0" max="100" class="form-control"/>');
      $("#quintaColetaLiquor").append('<label>Caixa Número:</label><input type="number" name="caixaQuintoLiquor" id="caixQuintoaLiquor" min="0" max="500" class="form-control"/>');
      countLiquor++;
    }else if (countLiquor == 6) {
      $("#sextaColetaLiquor").append('<hr>');
      $("#sextaColetaLiquor").append('<label>Data da Sexta Coleta:</label><input type="date" name="dtSextaColetaLiquor" id="dtSextaColetaLiquor" class="form-control"/>');
      $("#sextaColetaLiquor").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelSextoLiquor" id="qtDiponivelSextoLiquor" min="0" max="100" class="form-control"/>');
      $("#sextaColetaLiquor").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaSextoLiquor" id="qtUtilizadaSextoLiquor" min="0" max="100" class="form-control"/>');
      $("#sextaColetaLiquor").append('<label>Caixa Número:</label><input type="number" name="caixaSextoLiquor" id="caixaSextoLiquor" min="0" max="500" class="form-control"/>');
      countLiquor++;
      $("#addLiquor").css("visibility", "hidden");
    }
  });

  $("#addPlacenta").click(function(){
    if (countPlacenta == 2) {
      $("#segundaColetaPlacenta").append('<hr>');
      $("#segundaColetaPlacenta").append('<label>Data da Segunda Coleta:</label><input type="date" name="dtSegundaColetaPlacenta" id="dtSegundaColetaPlacenta" class="form-control"/>');
      $("#segundaColetaPlacenta").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelSegundoPlacenta" id="qtDiponivelSegundoPlacenta" min="0" max="100" class="form-control"/>');
      $("#segundaColetaPlacenta").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaSegundoPlacenta" id="qtUtilizadaSegundoPlacenta" min="0" max="100" class="form-control"/>');
      $("#segundaColetaPlacenta").append('<label>Caixa Número:</label><input type="number" name="caixaSegundoPlacenta" id="caixaSegundoPlacenta" min="0" max="500" class="form-control"/>');
      countPlacenta++;
    }else if (countPlacenta == 3) {
      $("#terceiraColetaPlacenta").append('<hr>');
      $("#terceiraColetaPlacenta").append('<label>Data da Terceira Coleta:</label><input type="date" name="dtTerceiraColetaPlacenta" id="dtTerceiraColetaPlacenta" class="form-control"/>');
      $("#terceiraColetaPlacenta").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelTerceiroPlacenta" id="qtDiponivelTerceiroPlacenta" min="0" max="100" class="form-control"/>');
      $("#terceiraColetaPlacenta").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaTerceiroPlacenta" id="qtUtilizadaTerceiroPlacenta" min="0" max="100" class="form-control"/>');
      $("#terceiraColetaPlacenta").append('<label>Caixa Número:</label><input type="number" name="caixaTerceiroPlacenta" id="caixaTerceiroPlacenta" min="0" max="500" class="form-control"/>');
      countPlacenta++;
    }else if (countPlacenta == 4) {
      $("#quartaColetaPlacenta").append('<hr>');
      $("#quartaColetaPlacenta").append('<label>Data da Quarta Coleta:</label><input type="date" name="dtQuartaColetaPlacenta" id="dtQuartaColetaPlacenta" class="form-control"/>');
      $("#quartaColetaPlacenta").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelQuartoPlacenta" id="qtDiponivelQuartoPlacenta" min="0" max="100" class="form-control"/>');
      $("#quartaColetaPlacenta").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaQuartoPlacenta" id="qtUtilizadaQuartoPlacenta" min="0" max="100" class="form-control"/>');
      $("#quartaColetaPlacenta").append('<label>Caixa Número:</label><input type="number" name="caixaQuartoPlacenta" id="caixaQuartoPlacenta" min="0" max="500" class="form-control"/>');
      countPlacenta++;
    }else if (countPlacenta == 5) {
      $("#quintaColetaPlacenta").append('<hr>');
      $("#quintaColetaPlacenta").append('<label>Data da Quinta Coleta:</label><input type="date" name="dtQuintaColetaPlacenta" id="dtQuintaColetaPlacenta" class="form-control"/>');
      $("#quintaColetaPlacenta").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelQuintoPlacenta" id="qtDiponivelQuintoPlacenta" min="0" max="100" class="form-control"/>');
      $("#quintaColetaPlacenta").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaQuintoPlacenta" id="qtUtilizadaPlacenta" min="0" max="100" class="form-control"/>');
      $("#quintaColetaPlacenta").append('<label>Caixa Número:</label><input type="number" name="caixaQuintoPlacenta" id="caixQuintoaPlacenta" min="0" max="500" class="form-control"/>');
      countPlacenta++;
    }else if (countPlacenta == 6) {
      $("#sextaColetaPlacenta").append('<hr>');
      $("#sextaColetaPlacenta").append('<label>Data da Sexta Coleta:</label><input type="date" name="dtSextaColetaPlacenta" id="dtSextaColetaPlacenta" class="form-control"/>');
      $("#sextaColetaPlacenta").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelSextoPlacenta" id="qtDiponivelSextoPlacenta" min="0" max="100" class="form-control"/>');
      $("#sextaColetaPlacenta").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaSextoPlacenta" id="qtUtilizadaSextoPlacenta" min="0" max="100" class="form-control"/>');
      $("#sextaColetaPlacenta").append('<label>Caixa Número:</label><input type="number" name="caixaSextoPlacenta" id="caixaSextoPlacenta" min="0" max="500" class="form-control"/>');
      countPlacenta++;
      $("#addPlacenta").css("visibility", "hidden");
    }
  });

  $("#addLiqAminiotico").click(function(){
    if (countLiqAminiotico == 2) {
      $("#segundaColetaLiqAminiotico").append('<hr>');
      $("#segundaColetaLiqAminiotico").append('<label>Data da Segunda Coleta:</label><input type="date" name="dtSegundaColetaLiqAminiotico" id="dtSegundaColetaLiqAminiotico" class="form-control"/>');
      $("#segundaColetaLiqAminiotico").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelSegundoLiqAminiotico" id="qtDiponivelSegundoLiqAminiotico" min="0" max="100" class="form-control"/>');
      $("#segundaColetaLiqAminiotico").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaSegundoLiqAminiotico" id="qtUtilizadaSegundoLiqAminiotico" min="0" max="100" class="form-control"/>');
      $("#segundaColetaLiqAminiotico").append('<label>Caixa Número:</label><input type="number" name="caixaSegundoLiqAminiotico" id="caixaSegundoLiqAminiotico" min="0" max="500" class="form-control"/>');
      countLiqAminiotico++;
    }else if (countLiqAminiotico == 3) {
      $("#terceiraColetaLiqAminiotico").append('<hr>');
      $("#terceiraColetaLiqAminiotico").append('<label>Data da Terceira Coleta:</label><input type="date" name="dtTerceiraColetaLiqAminiotico" id="dtTerceiraColetaLiqAminiotico" class="form-control"/>');
      $("#terceiraColetaLiqAminiotico").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelTerceiroLiqAminiotico" id="qtDiponivelTerceiroLiqAminiotico" min="0" max="100" class="form-control"/>');
      $("#terceiraColetaLiqAminiotico").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaTerceiroLiqAminiotico" id="qtUtilizadaTerceiroLiqAminiotico" min="0" max="100" class="form-control"/>');
      $("#terceiraColetaLiqAminiotico").append('<label>Caixa Número:</label><input type="number" name="caixaTerceiroLiqAminiotico" id="caixaTerceiroLiqAminiotico" min="0" max="500" class="form-control"/>');
      countLiqAminiotico++;
    }else if (countLiqAminiotico == 4) {
      $("#quartaColetaLiqAminiotico").append('<hr>');
      $("#quartaColetaLiqAminiotico").append('<label>Data da Quarta Coleta:</label><input type="date" name="dtQuartaColetaLiqAminiotico" id="dtQuartaColetaLiqAminiotico" class="form-control"/>');
      $("#quartaColetaLiqAminiotico").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelQuartoLiqAminiotico" id="qtDiponivelQuartoLiqAminiotico" min="0" max="100" class="form-control"/>');
      $("#quartaColetaLiqAminiotico").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaQuartoLiqAminiotico" id="qtUtilizadaQuartoLiqAminiotico" min="0" max="100" class="form-control"/>');
      $("#quartaColetaLiqAminiotico").append('<label>Caixa Número:</label><input type="number" name="caixaQuartoLiqAminiotico" id="caixaQuartoLiqAminiotico" min="0" max="500" class="form-control"/>');
      countLiqAminiotico++;
    }else if (countLiqAminiotico == 5) {
      $("#quintaColetaLiqAminiotico").append('<hr>');
      $("#quintaColetaLiqAminiotico").append('<label>Data da Quinta Coleta:</label><input type="date" name="dtQuintaColetaLiqAminiotico" id="dtQuintaColetaLiqAminiotico" class="form-control"/>');
      $("#quintaColetaLiqAminiotico").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelQuintoLiqAminiotico" id="qtDiponivelQuintoLiqAminiotico" min="0" max="100" class="form-control"/>');
      $("#quintaColetaLiqAminiotico").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaQuintoLiqAminiotico" id="qtUtilizadaLiqAminiotico" min="0" max="100" class="form-control"/>');
      $("#quintaColetaLiqAminiotico").append('<label>Caixa Número:</label><input type="number" name="caixaQuintoLiqAminiotico" id="caixQuintoaLiqAminiotico" min="0" max="500" class="form-control"/>');
      countLiqAminiotico++;
    }else if (countLiqAminiotico == 6) {
      $("#sextaColetaLiqAminiotico").append('<hr>');
      $("#sextaColetaLiqAminiotico").append('<label>Data da Sexta Coleta:</label><input type="date" name="dtSextaColetaLiqAminiotico" id="dtSextaColetaLiqAminiotico" class="form-control"/>');
      $("#sextaColetaLiqAminiotico").append('<label>Quantidade Disponível da Amostra:</label><input type="number" name="qtDiponivelSextoLiqAminiotico" id="qtDiponivelSextoLiqAminiotico" min="0" max="100" class="form-control"/>');
      $("#sextaColetaLiqAminiotico").append('<label>Quantidade de Amostra Utilizada:</label><input type="number" name="qtUtilizadaSextoLiqAminiotico" id="qtUtilizadaSextoLiqAminiotico" min="0" max="100" class="form-control"/>');
      $("#sextaColetaLiqAminiotico").append('<label>Caixa Número:</label><input type="number" name="caixaSextoLiqAminiotico" id="caixaSextoLiqAminiotico" min="0" max="500" class="form-control"/>');
      countLiqAminiotico++;
      $("#addLiqAminiotico").css("visibility", "hidden");
    }
  });
});
