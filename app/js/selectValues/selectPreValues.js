angular
  .module('zikaApp')
  .controller('selectPreValuesController', function($scope){
    $scope.simnao = [
      {"nome": " ", "value": " "},
      {"nome": "Sim", "value": "sim"},
      {"nome": "Não", "value": "não"}
    ];

    $scope.melhoresHorarios = [
      {"nome": "Manhã", "value": "manha"},
      {"nome": "Tarde", "value": "tarde"},
      {"nome": "Noite", "value": "noite"}
    ];
  });
