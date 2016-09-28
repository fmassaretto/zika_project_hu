<?php
  include('header.php');
?>

    <script>
    $(document).ready(function(){
      $('#home').removeClass('active').addClass('');
      $('#buscaPcte').addClass('active');
      $('#h3Title').html("Buscar Pacientes");
    });

    </script>

    <div class="container">
      <!-- Example row of columns -->
      <div class="row">
        <div class="col-md-12">
          <h2>Busque por Pacientes:</h2>
          <p>Digite uma informação da paciente, como por exemplo, nome da paciente, numero do caso, CPF etc </p>
          <hr>
          <form class="navbar-form navbar-left">
            <div class="form-group">
              <input type="text" name="campoPesquisa" class="form-control"/>
            </div>
            <input type="submit" value="Pesquisar" class="btn btn-success"/>
            <input type="submit" value="Ver Todas Pacientes" class="btn btn-default"/>
          </form>

          <table class="table table-hover">
            <thead>
              <tr>
                <th>Caso</th>
                <th>Nome da Paciente</th>
                <th>CPF</th>
                <th>Nome do Recém-Nascido</th>
                <th>Visualizar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>123/16</td>
                <td>Josefa dos Santos</td>
                <td>123.123.123-99</td>
                <td>João dos Santos</td>
                <td><input type="button" value="Visualizar" class="btn btn-info"></td>
              </tr>
              <tr>
                <td>123/16</td>
                <td>Josefa dos Santos</td>
                <td>123.123.123-99</td>
                <td>João dos Santos</td>
                <td><input type="button" value="Visualizar" class="btn btn-info"></td>
              </tr>
              <tr>
                <td>123/16</td>
                <td>Josefa dos Santos</td>
                <td>123.123.123-99</td>
                <td>João dos Santos</td>
                <td><input type="button" value="Visualizar" class="btn btn-info"></td>
              </tr>
            </tbody>
          </table>
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
