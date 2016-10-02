angular
  .module('zikaApp')
  .controller('selectPreValuesController', function($scope){
    $scope.simnao = [
      {"nome": " ", "value": " "},
      {"nome": "Sim", "value": "sim"},
      {"nome": "Não", "value": "nao"}
    ];

    $scope.melhoresHorarios = [
      {"nome": "Manhã", "value": "manha"},
      {"nome": "Tarde", "value": "tarde"},
      {"nome": "Noite", "value": "noite"}
    ];

    $scope.prateleiras = [
      {"nome": " ", "value": " "},
      {"nome": "Prateleira 1", "value": "prateleira 1"},
      {"nome": "Prateleira 2", "value": "prateleira 2"},
      {"nome": "Prateleira 3", "value": "prateleira 3"},
      {"nome": "Prateleira 4", "value": "prateleira 4"},
      {"nome": "Prateleira 5", "value": "prateleira 5"},
      {"nome": "Prateleira 6", "value": "prateleira 6"}
    ];

    $scope.freezers = [
      {"nome": " ", "value": " "},
      {"nome": "Freezer 1", "value": "freezer 1"},
      {"nome": "Freezer 2", "value": "freezer 2"},
      {"nome": "Freezer 3", "value": "freezer 3"}
    ];

    $scope.tiposParto = [
      {"nome": " ", "value": " "},
      {"nome": "Vaginal", "value": "vaginal"},
      {"nome": "Cesárea", "value": "cesarea"},
      {"nome": "Fórceps", "value": "forceps"},
      {"nome": "Não Informado", "value": "naoInformado"}
    ];

    $scope.normalAnormal = [
      {"nome": " ", "value": " "},
      {"nome": "Normal", "value": "normal"},
      {"nome": "Anormal", "value": "anormal"}
    ];

    $scope.positivoNegativo = [
      {"nome": " ", "value": " "},
      {"nome": "Positivo", "value": "Positivo"},
      {"nome": "Negativo", "value": "Negativo"}
    ];
  });
