<?php
  include('header.php');
?>

    <script type='text/javascript' src='js/cep.js'></script>

    <div class="container">
      <!-- Example row of columns -->
      <div class="row">
        <div class="col-sm-7 nav navbar-left">
            <form>
              <label>Numero Caso:</label><input type="text" name="nrCaso" id="nrCaso" class="form-control"/></br>
              <label>Nome Paciente:</label><input type="text" name="nomePaciente" id="nomePaciente" class="form-control"/></br>
              <label>CPF:</label><input type="text" name="cpf" id="cpf" class="form-control"/></br>
              <label>RG:</label><input type="text" name="rg" id="rg" class="form-control"/></br>
              <label>Data de Nascimento:</label><input type="date" name="dtNascimento" id="dtNascimento" class="form-control"/>
              <hr>
              <label>Grupo da Gestante:</label><select id="grupoGestante" class="form-control">
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
              <label>Estado:</label><select id="estado" name="estado" class="form-control" data-live-search="true"><option value=""></option></select></br>
              <label>Cidade:</label><select id="cidade" name="cidade" class="form-control" data-live-search="true"></select></br>
              <label>Bairro:</label><select id="bairro" name="bairro" class="form-control" data-live-search="true"></select></br></br>

              <!-- Modal -->
              <div class="modal fade" id="modalDesistiu" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                      <h4 class="modal-title" id="myModalLabel">Paciente Desistiu do Projeto</h4>
                    </div>
                    <div class="modal-body">
                      <label>Data da Desistência:</label><input type="date" name="dtDesistencia" id="dtDesistencia"/></br>
                      <label>Motivo da Desistência:</label><textarea name="txtMotivoDesistencia" id="txtMotivoDesistencia" rows="4" cols="40"></textarea>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
                      <button type="button" class="btn btn-primary">Salvar</button>
                    </div>
                  </div>
                </div>
              </div>
        </div>

        <div class="col-sm-1"></div>

        <div class="col-sm-7 nav navbar-left">
            <label>Data de Entrada no Projeto:</label><input type="date" name="dtEntradaProjeto" id="dtEntradaProjeto" class="form-control"/></br>
            <label>Qual UBS Frequenta:</label><select id="ubsFrequenta" class="form-control">
                                                <option>Mustard</option>
                                                <option class="special">Ketchup</option>
                                                <option style="background: #5cb85c; color: #fff;">Relish</option>
                                              </select></br>
            <label>Assinou o Termo de Consentimento?</label><select id="assTermConsent" class="form-control">
                                                              <option>Sim</option>
                                                              <option>Não</option>
                                                            </select></br>
            <label>Melhor Horário para Contato:</label><select id="melhorHorarioContato" class="form-control" multiple>
                                                        <option>Manhã</option>
                                                        <option>Tarde</option>
                                                        <option>Noite</option>
                                                      </select>
                                                      <hr>
            <label>Telefone (Celular/Principal):</label><input type="text" name="telCelPri" id="telCelPri" class="form-control" /></br>
            <label>Telefone (Fixo/Segundo):</label><input type="text" name="telFixoSec" id="telFixoSec" class="form-control" /></br>
            <label>Telefone (Recado/Terceiro):</label><input type="text" name="telRecTer" id="telRecTer" class="form-control" /><label>Nome:</label><input type="text" name="nrCaso" class="form-control"/></br>



                <input type="submit" name="editar" value="Editar" class="btn btn-success btn-sm"/>
                <input type="button" name="cancelar" value="Cancelar" class="btn btn-default btn-sm"/>
                <input type="button" name="desistiu" value="Desistiu do Projeto" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#modalDesistiu"/>


          </form>
        </div>

        <div class="col-sm-9">
          <h2>Heading</h2>
          <ul>
            <li><a href="">Criar/Editar Informações Socioeconomicas da Paciente <span class="badge">0</span></a></li>
            <li><a href="">Criar/Editar Detalhes da Gravidez <span class="badge">0</span></a></li>
            <li><a href="">Criar/Editar Recém-Nascido <span class="badge">0</span></a></li>
            <li><a href="">Criar/Editar Acompanhamentos da Gravidez <span class="badge">0</span></a></li>
            <li><a href="">Criar/Editar Exames Físico Geral <span class="badge">0</span></a></li>
            <li><a href="">Criar/Editar Exames Físico Obstétrico <span class="badge">0</span></a></li>
            <li><a href="">Criar/Editar Exames Laboratoriais <span class="badge">0</span></a></li>
            <li><a href="">Criar/Editar Resultado Paciente <span class="badge">0</span></a></li>
            <li><a href="">Criar/Editar Amostras Paciente <span class="badge">0</span></a></li>
            <li><a href="">Criar/Editar Resultado - Exames Laboratoriais <span class="badge">0</span></a></li>
          </ul>
       </div>
      </div>

      <hr>

      <footer>
        <p>&copy; 2016 Company, Inc.</p>
      </footer>
    </div> <!-- /container -->


<?php
  include('footer.php');
?>
