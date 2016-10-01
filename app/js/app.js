//angular.module('zikaApp', ['ui.bootstrap']);

// create the module and name it scotchApp
    // also include ngRoute for all our routing needs
var zikaApp = angular.module('zikaApp', ['ngRoute', 'ngResource']);


// configure our routes
zikaApp.config(function($routeProvider) {
  $routeProvider
      .when('/', {
          templateUrl : 'partials/inicio.html',
          controller  : 'containerController'
        })
        .when('/criarAmostrasPaciente', {
            templateUrl : 'partials/criarAmostrasPaciente.html',
            controller  : 'criarAmostratPctController'
        })
        .when('/infoPaciente', {
            templateUrl : 'partials/infoPaciente.html',
            controller  : 'infoPctController'
        })
        .when('/resultExamLabPaciente', {
            templateUrl : 'partials/resultExamLabPaciente.html',
            controller  : 'resExLabPctController'
        })
        .when('/cadastrarPaciente', {
            templateUrl : 'partials/cadastrarPaciente.html',
            controller  : 'cadastrarPctController'
        })
        .when('/buscarPaciente', {
            templateUrl : 'partials/buscarPaciente.html',
            controller  : 'buscarPctController'
        })
        .otherwise({
          template: '<h1>Not Found</h1>'
        });
});

// create the controller and inject Angular's $scope
zikaApp.controller('containerController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Pagina Inicial!';
});

zikaApp.controller('criarAmostratPctController', function($scope) {
    $scope.message = 'Pagina para criar amostras da paciente.';
});

zikaApp.controller('infoPctController', function($scope) {
    $scope.message = 'Pagina com as informações da paciente.';
});

zikaApp.controller('resExLabPctController', function($scope) {
    $scope.message = 'Pagina com os resultados dos exames laboratoriais da paciente.';
});

zikaApp.controller('cadastrarPctController', function($scope) {
    $scope.message = 'Pagina para cadastrar a paciente.';
});

zikaApp.controller('buscarPctController', function($scope) {
    $scope.message = 'Pagina para buscar paciente.';
});
