<?php
  include('header.php');
?>

    <script type='text/javascript' src='js/cep.js'></script>

    <div class="container">
      <!-- Example row of columns -->
      <div class="row">
        <div class="col-md-7 nav navbar-left">
            <form action="infoPaciente.php" method="POST">
              <label>Numero Caso:</label><input type="text" name="nrCaso" id="nrCaso" class="form-control"/></br>
              <label>Nome Paciente:</label><input type="text" name="nomePaciente" id="nomePaciente" class="form-control"/></br>
              <label>CPF:</label><input type="text" name="cpf" id="cpf" class="form-control"/></br>
              <label>RG:</label><input type="text" name="rg" id="rg" class="form-control"/></br>
              <label>Data de Nascimento:</label><input type="date" name="dtNascimento" id="dtNascimento" class="form-control"/>
              <hr>
              <label>Grupo da Gestante:</label><select id="grupoGestante" class="selectpicker form-control">
                                                          <option>Grupo 1 (Assintomática)</option>
                                                          <option>Grupo 2 (Sintomática)</option>
                                                        </select></br>
              <label>Data da Mudança de Grupo:</label><input type="date" name="dtMudancaGrupo" id="dtMudancaGrupo" class="form-control"/></br>
              <hr>
              <label>CEP:</label><input type="text" name="cep" id="cep" class="form-control"/></br>
              <label>Endereço:</label><input type="text" name="endereco" id="endereco" class="form-control"/></br>
              <label>Número:</label><input type="numero" name="numero" id="numero" class="form-control"/></br>
              <!-- <label>Estado:</label><input type="text" name="estado" id="estado" class="form-control" class="form-control"/></br>
              <label>Cidade:</label><input type="text" name="cidade" id="cidade" class="form-control" class="form-control"/></br>
              <label>Bairro:</label><input type="text" name="bairro" id="bairro" class="form-control" class="form-control"/></br> -->
              <label>Estado:</label><select id="estado" name="estado" class="form-control"></select></br>
              <label>Cidade:</label><select id="cidade" name="cidade" class="form-control"></select></br>
              <label>Bairro:</label><select id="bairro" name="bairro" class="form-control"></select></br></br>

        </div>

        <div class="col-sm-1"></div>

        <div class="col-md-7 nav navbar-left">
            <label>Data de Entrada no Projeto:</label><input type="date" name="dtEntradaProjeto" id="dtEntradaProjeto" class="form-control"/></br>
            <label>Qual UBS Frequenta:</label><select id="ubsFrequenta" class="selectpicker form-control">
                                                <option>Mustard</option>
                                                <option class="special">Ketchup</option>
                                                <option style="background: #5cb85c; color: #fff;">Relish</option>
                                              </select></br>
            <label>Assinou o Termo de Consentimento?</label><select id="assTermConsent" class="selectpicker form-control">
                                                              <option>Sim</option>
                                                              <option>Não</option>
                                                            </select></br>
            <label>Melhor Horário para Contato:</label><select id="melhorHorarioContato" class="selectpicker form-control" multiple>
                                                        <option>Manhã</option>
                                                        <option>Tarde</option>
                                                        <option>Noite</option>
                                                      </select>
                                                      <hr>
            <label>Telefone (Celular/Principal):</label><input type="text" name="telCelPri" id="telCelPri" class="form-control" /></br>
            <label>Telefone (Fixo/Segundo):</label><input type="text" name="telFixoSec" id="telFixoSec" class="form-control" /></br>
            <label>Telefone (Recado/Terceiro):</label><input type="text" name="telRecTer" id="telRecTer" class="form-control" /><label>Nome:</label><input type="text" name="nrCaso" class="form-control"/></br>

        </div>
        <div class="col-md-9">
          <h2>Heading</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
          <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
       </div>
      </div>

      <div class="row" id="btnEnvioCancela">
        <div class="col-xs-7 col-sm-9 col-md-9"></div>

        <div class="col-xs-10 col-sm-6 col-md-6">
            <input type="submit" name="salvar" value="Salvar" class="btn btn-success btn-sm"/>
            <input type="button" name="Cancelar" value="Cancelar" class="btn btn-default btn-sm"/>
          </form>
        </div>

        <div class="col-xs-7 col-sm-9 col-md-9"></div>
      </div>

      <hr>

      <footer>
        <p>&copy; 2016 Company, Inc.</p>
      </footer>
    </div> <!-- /container -->


<?php
  include('footer.php');
?>
