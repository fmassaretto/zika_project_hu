angular
  .module('zikaApp')
  .controller('incluirUsuarioCtrl', function($scope,$http){
    $scope.incluirUsuario = function(){
      $http.post("../php/incluirUsuario.php", {'nomeCompleto': $scope.nomeCompleto, 'email': $scope.email, 'tel': $scope.tel})
      .success(function(){
        $scope.msg = "Usuario cadastrado com sucesso!";
      });
    }
  });
