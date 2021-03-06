//angular.module('zikaApp', ['ui.bootstrap']);

// create the module and name it scotchApp
    // also include ngRoute for all our routing needs
var zikaApp = angular.module('zikaApp');


// configure our routes
zikaApp.config(function($routeProvider) {
  $routeProvider

      .when('/', {
          templateUrl : 'partials/inicio.html',
          controller  : 'inicioController',
          title       : 'Inicio!'
        })
        .when('/criarAmostrasPaciente', {
            templateUrl : 'partials/criarAmostrasPaciente.html',
            controller  : 'criarAmostratPctController',
            title       : 'Amostras das Pacientes'
        })
        .when('/infoPaciente', {
            templateUrl : 'partials/infoPaciente.html',
            controller  : 'infoPctController',
            title       : 'Informações da Paciente'
        })
        .when('/resultExamLabPaciente', {
            templateUrl : 'partials/resultExamLabPaciente.html',
            controller  : 'resExLabPctController',
            title       : 'Resultado dos Exames Laboratoriais da Paciente'
        })
        .when('/cadastrarPaciente', {
            templateUrl : 'partials/cadastrarPaciente.html',
            controller  : 'cadastrarPctController',
            title       : 'Cadastrar Paciente'
        })
        .when('/buscarPaciente', {
            templateUrl : 'partials/buscarPaciente.html',
            controller  : 'buscarPctController',
            title       : 'Pesquisar Paciente'
        })
        .when('/cadastrarRN', {
            templateUrl : 'partials/cadastrarRN.html',
            controller  : 'cadastrarRNController',
            title       : 'Cadastrar Recém-Nascido'
        })
        .when('/dadosRN', {
            templateUrl : 'partials/dadosRN.html',
            controller  : 'dadosRNController',
            title       : 'Dados do Recém-Nascido'
        })
        .when('/criarConta', {
            templateUrl : 'partials/criarConta.html',
            controller  : 'criarContaController',
            title       : 'Criar Conta de Usuário'
        })
        .otherwise({
          template: '<h1>Not Found</h1>'
        });
});

// change Page Title based on the routers
zikaApp.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);

// create the controller and inject Angular's $scope
zikaApp.controller('inicioController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Pagina Inicial!';
    $scope.titulo = 'Início!';
});

zikaApp.controller('criarAmostratPctController', function($scope) {
    $scope.message = 'Pagina para criar amostras da paciente.';
    $scope.titulo = 'Amostras das Pacientes';
});

zikaApp.controller('infoPctController', function($scope) {
    $scope.message = 'Pagina com as informações da paciente.';
    $scope.titulo = 'Informações da Paciente';
});

zikaApp.controller('resExLabPctController', function($scope) {
    $scope.message = 'Pagina com os resultados dos exames laboratoriais da paciente.';
    $scope.titulo = 'Resultado dos Exames Laboratoriais da Paciente';
});

zikaApp.controller('cadastrarPctController', function($scope) {
    $scope.message = 'Pagina para cadastrar a paciente.';
    $scope.titulo = 'Cadastrar Paciente';
});

zikaApp.controller('buscarPctController', function($scope) {
    $scope.message = 'Pagina para pesquisar paciente.';
    $scope.titulo = 'Pesquisar Paciente';
});

zikaApp.controller('cadastrarRNController', function($scope) {
    $scope.message = 'Pagina para cadastrar Recém-Nascido.';
    $scope.titulo = 'Cadastrar Recém-Nascido';
});

zikaApp.controller('dadosRNController', function($scope) {
    $scope.message = 'Pagina dos Dados Recém-Nascido.';
    $scope.titulo = 'Dados do Recém-Nascido';
});

zikaApp.controller('criarContaController', function($scope) {
    $scope.message = 'Pagina para Criar Cnta de Usuário.';
    $scope.titulo = 'Dados do Recém-Nascido';
});
