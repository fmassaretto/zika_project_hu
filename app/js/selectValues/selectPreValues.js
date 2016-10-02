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
      {"nome": "Prateleira 1", "value": "Prateleira 1"},
      {"nome": "Prateleira 2", "value": "Prateleira 2"},
      {"nome": "Prateleira 3", "value": "Prateleira 3"},
      {"nome": "Prateleira 4", "value": "Prateleira 4"},
      {"nome": "Prateleira 5", "value": "Prateleira 5"},
      {"nome": "Prateleira 6", "value": "Prateleira 6"}
    ];

    $scope.freezers = [
      {"nome": " ", "value": " "},
      {"nome": "Freezer 1", "value": "Freezer 1"},
      {"nome": "Freezer 2", "value": "Freezer 2"},
      {"nome": "Freezer 3", "value": "Freezer 3"}
    ];
  });
