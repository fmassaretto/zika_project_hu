angular
  .module('zikaApp')
// var app = angular.module('cepApp', ['ngResource'])
			.controller('cepCtrl', function($scope, myResource) {
			    $scope.cep = "", $scope.resultCEP = null;
		        $scope.findCep = function () {
		        	myResource.get({'cep': $scope.cep}).$promise
					.then(function success(result){
						$scope.resultCEP = result;
					}).catch(function error(msg) {
						console.error('Error');
					});
			    }
			}).factory('myResource', function ($resource) {
				var rest = $resource(
			      'https://viacep.com.br/ws/:cep/json/',
			      {
			        'cep': ''
			      }
			    );
			    return rest;
			});
