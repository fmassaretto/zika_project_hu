<?php
  include('header.php');
?>
<script src="js/addAmostras.js" type="text/javascript"></script>
<div class="container" id="w">
  <div class="col-md-24" id="painelInfoPaciente">
    <h3>{nome da paciente}</h3> <h4>{Numero do Caso}</h4>
  </div>
</div>

<div class="container">

  <!-- Example row of columns -->
  <div class="row">

    <!-- Aqui começa a coluna da esquerda -->
    <div class="col-sm-7 nav navbar-left">

        <form>
          <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

            <div class="panel panel-default">
              <div class="panel-heading" role="tab" id="headingOne">
                <h4 class="panel-title">
                  <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Zika Vírus <span class="glyphicon glyphicon-ok" aria-hidden="True" ></span>
                  </a>
                </h4>
              </div>
              <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                <div class="panel-body">
                  <label>Zika Vírus:</label><input type="checkbox" name="chkZika" id="chkZika" class="form-control"/>
                  <label>Data da Amostra de Zika Vírus:</label><input type="date" name="dtAmostraZika" id="dtAmostraZika" class="form-control"/>
                  <label>Data do Exame de Zika Vírus:</label><input type="date" name="dtExameZika" id="dtExameZika" class="form-control"/>
                  <label>Material Utilizado para Zika Vírus:</label><select id="matUtilizadoZika" class="form-control">
                                                                      <option class=""></option>
                                                                      <option class="">Urina</option>
                                                                      <option class="">Saliva</option>
                                                                      <option class="">Soro</option>
                                                                      <option class="">Plasma</option>
                                                                    </select>
                  <label>Resultado para Zika Vírus:</label><select id="resultadoZika" class="form-control">
                                                                      <option></option>
                                                                      <option class="selectPositivo">Positivo</option>
                                                                      <option class="selectNegativo">Negativo</option>
                                                                      <option class="selectIndefinido">Indefinido</option>
                                                                      <option class="selectNaoTestado">Não Testado</option>
                                                                    </select>
                  <label>Especificar Teste Usado para Zika Vírus:</label><select id="especTesteUsadoZika" class="form-control">
                                                                            <option></option>
                                                                            <option class="">RT-PCR</option>
                                                                            <option class="">Elisa</option>
                                                                            <option class="">Macrorray</option>
                                                                            <option class="">CT</option>
                                                                            <option class="">Outro</option>
                                                                          </select>
                  <label>CT Zika Vírus:</label><input type="number" name="ctZika" id="ctZika" min="0" max="100" class="form-control"/>
                  <label>Outro:</label><input type="text" name="outroZika" id="outroZika" class="form-control"/>
                </div>
              </div>
            </div>

            <div class="panel panel-default">
              <div class="panel-heading" role="tab" id="headingTwo">
                <h4 class="panel-title">
                  <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Febre Amarela <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                  </a>
                </h4>
              </div>
              <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                <div class="panel-body">
                  <label>Febre Amarela:</label><input type="checkbox" name="chkFebre" id="chkFebre" class="form-control"/>
                  <label>Data da Amostra de Febre Amarela:</label><input type="date" name="dtAmostraFebre" id="dtAmostraFebre" class="form-control"/>
                  <label>Data do Exame de Febre Amarela:</label><input type="date" name="dtExameFebre" id="dtExameFebre" class="form-control"/>
                  <label>Material Utilizado para Febre Amarela:</label><select id="matUtilizadoFebre" class="form-control">
                                                                      <option class=""></option>
                                                                      <option class="">Urina</option>
                                                                      <option class="">Saliva</option>
                                                                      <option class="">Soro</option>
                                                                      <option class="">Plasma</option>
                                                                    </select>
                  <label>Resultado para Febre Amarela:</label><select id="resultadoFebre" class="form-control">
                                                                      <option></option>
                                                                      <option class="selectPositivo">Positivo</option>
                                                                      <option class="selectNegativo">Negativo</option>
                                                                      <option class="selectIndefinido">Indefinido</option>
                                                                      <option class="selectNaoTestado">Não Testado</option>
                                                                    </select>
                  <label>Especificar Teste Usado para Febre Amarela:</label><select id="especTesteUsadoFebre" class="form-control">
                                                                            <option></option>
                                                                            <option class="">RT-PCR</option>
                                                                            <option class="">Elisa</option>
                                                                            <option class="">Macrorray</option>
                                                                            <option class="">CT</option>
                                                                            <option class="">Outro</option>
                                                                          </select>
                  <label>CT Febre Amarela:</label><input type="number" name="ctFebre" id="ctFebre" min="0" max="100" class="form-control"/>
                  <label>Outro:</label><input type="text" name="outroFebre" id="outroFebre" class="form-control"/>
                </div>
              </div>
            </div>

            <div class="panel panel-default">
              <div class="panel-heading" role="tab" id="headingThree">
                <h4 class="panel-title">
                  <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Vírus Chikungunya <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                  </a>
                </h4>
              </div>
              <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                <div class="panel-body">
                  <label>Vírus Chikungunya:</label><input type="checkbox" name="chkChikungunya" id="chkChikungunya" class="form-control"/>
                  <label>Data da Amostra do Vírus Chikungunya:</label><input type="date" name="dtAmostraChikungunya" id="dtAmostraChikungunya" class="form-control"/>
                  <label>Data do Exame do Vírus Chikungunya:</label><input type="date" name="dtExameChikungunya" id="dtExameChikungunya" class="form-control"/>
                  <label>Material Utilizado para Vírus Chikungunya:</label><select id="matUtilizadoChikungunya" class="form-control">
                                                                      <option class=""></option>
                                                                      <option class="">Urina</option>
                                                                      <option class="">Saliva</option>
                                                                      <option class="">Soro</option>
                                                                      <option class="">Plasma</option>
                                                                    </select>
                  <label>Resultado para Vírus Chikungunya:</label><select id="resultadoChikungunya" class="form-control">
                                                                      <option></option>
                                                                      <option class="selectPositivo">Positivo</option>
                                                                      <option class="selectNegativo">Negativo</option>
                                                                      <option class="selectIndefinido">Indefinido</option>
                                                                      <option class="selectNaoTestado">Não Testado</option>
                                                                    </select>
                  <label>Especificar Teste Usado para Vírus Chikungunya:</label><select id="especTesteUsadoChikungunya" class="form-control">
                                                                            <option></option>
                                                                            <option class="">RT-PCR</option>
                                                                            <option class="">Elisa</option>
                                                                            <option class="">Macrorray</option>
                                                                            <option class="">CT</option>
                                                                            <option class="">Outro</option>
                                                                          </select>
                  <label>CT Vírus Chikungunya:</label><input type="number" name="ctChikungunya" id="ctChikungunya" min="0" max="100" class="form-control"/>
                  <label>Outro:</label><input type="text" name="outroChikungunya" id="outroChikungunya" class="form-control"/>
                </div>
              </div>
            </div>

              <div class="panel panel-default">
                <div class="panel-heading" role="tab" id="headingFour">
                  <h4 class="panel-title">
                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      Rubéola <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                    </a>
                  </h4>
                </div>
                <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                  <div class="panel-body">
                    <label>Rubéola:</label><input type="checkbox" name="chkRubeola" id="chkRubeola" class="form-control"/>
                    <label>Data da Amostra de Rubéola:</label><input type="date" name="dtAmostraRubeola" id="dtAmostraRubeola" class="form-control"/>
                    <label>Data do Exame de Rubéola:</label><input type="date" name="dtExameRubeola" id="dtExameRubeola" class="form-control"/>
                    <label>Material Utilizado para Rubéola:</label><select id="matUtilizadoRubeola" class="form-control">
                                                                        <option class=""></option>
                                                                        <option class="">Urina</option>
                                                                        <option class="">Saliva</option>
                                                                        <option class="">Soro</option>
                                                                        <option class="">Plasma</option>
                                                                      </select>
                    <label>Resultado para Rubéola:</label><select id="resultadoRubeola" class="form-control">
                                                                        <option></option>
                                                                        <option class="selectPositivo">Positivo</option>
                                                                        <option class="selectNegativo">Negativo</option>
                                                                        <option class="selectIndefinido">Indefinido</option>
                                                                        <option class="selectNaoTestado">Não Testado</option>
                                                                      </select>
                    <label>Especificar Teste Usado para Rubéola:</label><select id="especTesteUsadoRubeola" class="form-control">
                                                                              <option></option>
                                                                              <option class="">RT-PCR</option>
                                                                              <option class="">Elisa</option>
                                                                              <option class="">Macrorray</option>
                                                                              <option class="">CT</option>
                                                                              <option class="">Outro</option>
                                                                            </select>
                    <label>CT Rubéola:</label><input type="number" name="ctRubeola" id="ctRubeola" min="0" max="100" class="form-control"/>
                    <label>Outro:</label><input type="text" name="outroRubeola" id="outroRubeola" class="form-control"/>
                  </div>
                </div>
              </div>

              <div class="panel panel-default">
                <div class="panel-heading" role="tab" id="headingFive">
                  <h4 class="panel-title">
                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      Herpes <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                    </a>
                  </h4>
                </div>
                <div id="collapseFive" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                  <div class="panel-body">
                    <label>Herpes:</label><input type="checkbox" name="chkHerpes" id="chkHerpes" class="form-control"/>
                    <label>Data da Amostra de Herpes:</label><input type="date" name="dtAmostraHerpes" id="dtAmostraHerpes" class="form-control"/>
                    <label>Data do Exame de Herpes:</label><input type="date" name="dtExameHerpes" id="dtExameHerpes" class="form-control"/>
                    <label>Material Utilizado para Herpes:</label><select id="matUtilizadoHerpes" class="form-control">
                                                                        <option class=""></option>
                                                                        <option class="">Urina</option>
                                                                        <option class="">Saliva</option>
                                                                        <option class="">Soro</option>
                                                                        <option class="">Plasma</option>
                                                                      </select>
                    <label>Resultado para Herpes:</label><select id="resultadoHerpes" class="form-control">
                                                                        <option></option>
                                                                        <option class="selectPositivo">Positivo</option>
                                                                        <option class="selectNegativo">Negativo</option>
                                                                        <option class="selectIndefinido">Indefinido</option>
                                                                        <option class="selectNaoTestado">Não Testado</option>
                                                                      </select>
                    <label>Especificar Teste Usado para Herpes:</label><select id="especTesteUsadoHerpes" class="form-control">
                                                                              <option></option>
                                                                              <option class="">RT-PCR</option>
                                                                              <option class="">Elisa</option>
                                                                              <option class="">Macrorray</option>
                                                                              <option class="">CT</option>
                                                                              <option class="">Outro</option>
                                                                            </select>
                    <label>CT Herpes:</label><input type="number" name="ctHerpes" id="ctHerpes" min="0" max="100" class="form-control"/>
                    <label>Outro:</label><input type="text" name="outroHerpes" id="outroHerpes" class="form-control"/>
                  </div>
                </div>
              </div>
            </div>
    </div>

    <!-- Aqui começa a coluna da direita -->
    <div class="col-sm-7 col-offset-1 nav navbar-left">
      <div class="panel-group" id="accordion2" role="tablist" aria-multiselectable="true">
        <div class="panel panel-default">
          <div class="panel-heading" role="tab" id="headingSix">
            <h4 class="panel-title">
              <a role="button" data-toggle="collapse" data-parent="#accordion2" href="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                Dengue <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
              </a>
            </h4>
          </div>
          <div id="collapseSix" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix">
            <div class="panel-body">
              <label>Dengue:</label><input type="checkbox" name="chkDengue" id="chkDengue" class="form-control"/>
              <label>Data da Amostra de Dengue:</label><input type="date" name="dtAmostraDengue" id="dtAmostraDengue" class="form-control"/>
              <label>Data do Exame de Dengue:</label><input type="date" name="dtExameDengue" id="dtExameDengue" class="form-control"/>
              <label>Material Utilizado para Dengue:</label><select id="matUtilizadoDengue" class="form-control">
                                                                  <option class=""></option>
                                                                  <option class="">Urina</option>
                                                                  <option class="">Saliva</option>
                                                                  <option class="">Soro</option>
                                                                  <option class="">Plasma</option>
                                                                </select>
              <label>Resultado para Dengue:</label><select id="resultadoDengue" class="form-control">
                                                                  <option></option>
                                                                  <option class="selectPositivo">Positivo</option>
                                                                  <option class="selectNegativo">Negativo</option>
                                                                  <option class="selectIndefinido">Indefinido</option>
                                                                  <option class="selectNaoTestado">Não Testado</option>
                                                                </select>
              <label>Especificar Teste Usado para Dengue:</label><select id="especTesteUsadoDengue" class="form-control">
                                                                        <option></option>
                                                                        <option class="">RT-PCR</option>
                                                                        <option class="">Elisa</option>
                                                                        <option class="">Macrorray</option>
                                                                        <option class="">CT</option>
                                                                        <option class="">Outro</option>
                                                                      </select>
              <label>CT Dengue:</label><input type="number" name="ctDengue" id="ctDengue" min="0" max="100" class="form-control"/>
              <label>Outro:</label><input type="text" name="outroDengue" id="outroDengue" class="form-control"/>
            </div>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading" role="tab" id="headingSeven">
            <h4 class="panel-title">
              <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion2" href="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                Vírus do Oeste do Nilo <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
              </a>
            </h4>
          </div>
          <div id="collapseSeven" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSeven">
            <div class="panel-body">
              <label>Vírus do Oeste do Nilo:</label><input type="checkbox" name="chkOesteNilo" id="chkOesteNilo" class="form-control"/>
              <label>Data da Amostra do Vírus do Oeste do Nilo:</label><input type="date" name="dtAmostraOesteNilo" id="dtAmostraOesteNilo" class="form-control"/>
              <label>Data do Exame do Vírus do Oeste do Nilo:</label><input type="date" name="dtExameOesteNilo" id="dtExameOesteNilo" class="form-control"/>
              <label>Material Utilizado para Vírus do Oeste do Nilo:</label><select id="matUtilizadoOesteNilo" class="form-control">
                                                                  <option class=""></option>
                                                                  <option class="">Urina</option>
                                                                  <option class="">Saliva</option>
                                                                  <option class="">Soro</option>
                                                                  <option class="">Plasma</option>
                                                                </select>
              <label>Resultado para Vírus do Oeste do Nilo:</label><select id="resultadoOesteNilo" class="form-control">
                                                                  <option></option>
                                                                  <option class="selectPositivo">Positivo</option>
                                                                  <option class="selectNegativo">Negativo</option>
                                                                  <option class="selectIndefinido">Indefinido</option>
                                                                  <option class="selectNaoTestado">Não Testado</option>
                                                                </select>
              <label>Especificar Teste Usado para Vírus do Oeste do Nilo:</label><select id="especTesteUsadoOesteNilo" class="form-control">
                                                                        <option></option>
                                                                        <option class="">RT-PCR</option>
                                                                        <option class="">Elisa</option>
                                                                        <option class="">Macrorray</option>
                                                                        <option class="">CT</option>
                                                                        <option class="">Outro</option>
                                                                      </select>
              <label>CT Vírus do Oeste do Nilo:</label><input type="number" name="ctOesteNilo" id="ctOesteNilo" min="0" max="100" class="form-control"/>
              <label>Outro:</label><input type="text" name="outroOesteNilo" id="outroOesteNilo" class="form-control"/>
            </div>
          </div>
        </div>

        <div class="panel panel-default">
          <div class="panel-heading" role="tab" id="headingEight">
            <h4 class="panel-title">
              <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion2" href="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                Toxoplasmose <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
              </a>
            </h4>
          </div>
          <div id="collapseEight" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingEight">
            <div class="panel-body">
              <label>Vírus Toxoplasmose:</label><input type="checkbox" name="chkToxoplasmose" id="chkToxoplasmose" class="form-control"/>
              <label>Data da Amostra do Toxoplasmose:</label><input type="date" name="dtAmostraToxoplasmose" id="dtAmostraToxoplasmose" class="form-control"/>
              <label>Data do Exame do Toxoplasmose:</label><input type="date" name="dtExameToxoplasmose" id="dtExameToxoplasmose" class="form-control"/>
              <label>Material Utilizado para Toxoplasmose:</label><select id="matUtilizadoToxoplasmose" class="form-control">
                                                                  <option class=""></option>
                                                                  <option class="">Urina</option>
                                                                  <option class="">Saliva</option>
                                                                  <option class="">Soro</option>
                                                                  <option class="">Plasma</option>
                                                                </select>
              <label>Resultado para Toxoplasmose:</label><select id="resultadoToxoplasmose" class="form-control">
                                                                  <option></option>
                                                                  <option class="selectPositivo">Positivo</option>
                                                                  <option class="selectNegativo">Negativo</option>
                                                                  <option class="selectIndefinido">Indefinido</option>
                                                                  <option class="selectNaoTestado">Não Testado</option>
                                                                </select>
              <label>Especificar Teste Usado para Toxoplasmose:</label><select id="especTesteUsadoToxoplasmose" class="form-control">
                                                                        <option></option>
                                                                        <option class="">RT-PCR</option>
                                                                        <option class="">Elisa</option>
                                                                        <option class="">Macrorray</option>
                                                                        <option class="">CT</option>
                                                                        <option class="">Outro</option>
                                                                      </select>
              <label>CT Toxoplasmose:</label><input type="number" name="ctToxoplasmose" id="ctToxoplasmose" min="0" max="100" class="form-control"/>
              <label>Outro:</label><input type="text" name="outroToxoplasmose" id="outroToxoplasmose" class="form-control"/>
            </div>
          </div>
        </div>

          <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="headingNine">
              <h4 class="panel-title">
                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion2" href="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                  Cytomegalovirus <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                </a>
              </h4>
            </div>
            <div id="collapseNine" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingNine">
              <div class="panel-body">
                <label>Cytomegalovirus:</label><input type="checkbox" name="chkCytomegalovirus" id="chkCytomegalovirus" class="form-control"/>
                <label>Data da Amostra de Cytomegalovirus:</label><input type="date" name="dtAmostraCytomegalovirus" id="dtAmostraCytomegalovirus" class="form-control"/>
                <label>Data do Exame de Cytomegalovirus:</label><input type="date" name="dtExameCytomegalovirus" id="dtExameCytomegalovirus" class="form-control"/>
                <label>Material Utilizado para Cytomegalovirus:</label><select id="matUtilizadoCytomegalovirus" class="form-control">
                                                                    <option class=""></option>
                                                                    <option class="">Urina</option>
                                                                    <option class="">Saliva</option>
                                                                    <option class="">Soro</option>
                                                                    <option class="">Plasma</option>
                                                                  </select>
                <label>Resultado para Cytomegalovirus:</label><select id="resultadoCytomegalovirus" class="form-control">
                                                                    <option></option>
                                                                    <option class="selectPositivo">Positivo</option>
                                                                    <option class="selectNegativo">Negativo</option>
                                                                    <option class="selectIndefinido">Indefinido</option>
                                                                    <option class="selectNaoTestado">Não Testado</option>
                                                                  </select>
                <label>Especificar Teste Usado para Cytomegalovirus:</label><select id="especTesteUsadoCytomegalovirus" class="form-control">
                                                                          <option></option>
                                                                          <option class="">RT-PCR</option>
                                                                          <option class="">Elisa</option>
                                                                          <option class="">Macrorray</option>
                                                                          <option class="">CT</option>
                                                                          <option class="">Outro</option>
                                                                        </select>
                <label>CT Cytomegalovirus:</label><input type="number" name="ctCytomegalovirus" id="ctCytomegalovirus" min="0" max="100" class="form-control"/>
                <label>Outro:</label><input type="text" name="outroCytomegalovirus" id="outroCytomegalovirus" class="form-control"/>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="headingTen">
              <h4 class="panel-title">
                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion2" href="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                  HIV <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                </a>
              </h4>
            </div>
            <div id="collapseTen" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTen">
              <div class="panel-body">
                <label>HIV:</label><input type="checkbox" name="chkHIV" id="chkHIV" class="form-control"/>
                <label>Data da Amostra de HIV:</label><input type="date" name="dtAmostraHIV" id="dtAmostraHIV" class="form-control"/>
                <label>Data do Exame de HIV:</label><input type="date" name="dtExameHIV" id="dtExameHIV" class="form-control"/>
                <label>Material Utilizado para HIV:</label><select id="matUtilizadoHIV" class="form-control">
                                                                    <option class=""></option>
                                                                    <option class="">Urina</option>
                                                                    <option class="">Saliva</option>
                                                                    <option class="">Soro</option>
                                                                    <option class="">Plasma</option>
                                                                  </select>
                <label>Resultado para HIV:</label><select id="resultadoHIV" class="form-control">
                                                                    <option></option>
                                                                    <option class="selectPositivo">Positivo</option>
                                                                    <option class="selectNegativo">Negativo</option>
                                                                    <option class="selectIndefinido">Indefinido</option>
                                                                    <option class="selectNaoTestado">Não Testado</option>
                                                                  </select>
                <label>Especificar Teste Usado para HIV:</label><select id="especTesteUsadoHIV" class="form-control">
                                                                          <option></option>
                                                                          <option class="">RT-PCR</option>
                                                                          <option class="">Elisa</option>
                                                                          <option class="">Macrorray</option>
                                                                          <option class="">CT</option>
                                                                          <option class="">Outro</option>
                                                                        </select>
                <label>CT HIV:</label><input type="number" name="ctHIV" id="ctHIV" min="0" max="100" class="form-control"/>
                <label>Outro:</label><input type="text" name="outroHIV" id="outroHIV" class="form-control"/>
              </div>
            </div>
          </div>

          <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="headingEleven">
              <h4 class="panel-title">
                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion2" href="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                  Outro <span class="glyphicon glyphicon-ok" id="spanOutro"></span>
                </a>
              </h4>
            </div>
            <div id="collapseEleven" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingEleven">
              <div class="panel-body">
                <label>Outro:</label><input type="checkbox" name="chkOutro" id="chkOutro" class="form-control"/>
                <label>Qual:</label><input type="text" name="txtQualOutro" id="txtQualOutro" class="form-control"/>
                <label>Data da Amostra de Outro:</label><input type="date" name="dtAmostraOutro" id="dtAmostraOutro" class="form-control"/>
                <label>Data do Exame de Outro:</label><input type="date" name="dtExameOutro" id="dtExameOutro" class="form-control"/>
                <label>Material Utilizado para Outro:</label><select id="matUtilizadoOutro" class="form-control">
                                                                    <option class=""></option>
                                                                    <option class="">Urina</option>
                                                                    <option class="">Saliva</option>
                                                                    <option class="">Soro</option>
                                                                    <option class="">Plasma</option>
                                                                  </select>
                <label>Resultado para Outro:</label><select id="resultadoOutro" class="form-control">
                                                                    <option></option>
                                                                    <option class="selectPositivo">Positivo</option>
                                                                    <option class="selectNegativo">Negativo</option>
                                                                    <option class="selectIndefinido">Indefinido</option>
                                                                    <option class="selectNaoTestado">Não Testado</option>
                                                                  </select>
                <label>Especificar Teste Usado para Outro:</label><select id="especTesteUsadoOutro" class="form-control">
                                                                          <option></option>
                                                                          <option class="">RT-PCR</option>
                                                                          <option class="">Elisa</option>
                                                                          <option class="">Macrorray</option>
                                                                          <option class="">CT</option>
                                                                          <option class="">Outro</option>
                                                                        </select>
                <label>CT Outro:</label><input type="number" name="ctOutro" id="ctOutro" min="0" max="100" class="form-control"/>
                <label>Outro:</label><input type="text" name="outroOutro" id="outroOutro" class="form-control"/>
              </div>
            </div>
          </div>
        </div>


    </div>

    <div class="col-sm-9">
      <?php
        include('menuAsidePaciente.html');
      ?>
   </div>
  </div>

  <div class="row" id="btnEnvioCancela">
    <div class="col-xs-20 col-sm-9 col-md-9"></div>

    <div class="col-xs-10 col-sm-6 col-md-6">
      <input type="submit" name="editar" value="Editar" class="btn btn-success btn-sm"/>
      <input type="button" name="cancelar" value="Cancelar" class="btn btn-default btn-sm"/>
      </form>
    </div>

    <div class="col-xs-20 col-sm-9 col-md-9"></div>
  </div>

  <hr>

  <footer>
    <p>&copy; 2016 Company, Inc.</p>
  </footer>
</div> <!-- /container -->


<?php
  include('footer.php');
?>
