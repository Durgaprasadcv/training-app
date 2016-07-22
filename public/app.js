
var myApp = angular.module("myApp", []);

	/*myApp.config(['$httpProvider', function ($httpProvider) {
	    
	    $httpProvider.defaults.headers.get = { 'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL2F1dGhlbnRpY2F0ZSIsImlhdCI6MTQ2ODMzOTYwNiwiZXhwIjoxNDY4MzQzMjA2LCJuYmYiOjE0NjgzMzk2MDYsImp0aSI6ImE4OGVhZDVjYzE1MzRjYmUyZWU4NDVlNTc0MjgzYzAzIn0.4pG9sdnkgNmvz_wDkBUAvQHDSReYZCWghVZFg83dYJQ' };
	    $httpProvider.defaults.headers.common = {'Access-Control-Allow-Origin' : '*' };
	    
	   }]);*/

myApp.controller("myController", function($scope, $http){

/*$http.get("http://localhost:8000/api/allNotes?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL2F1dGhlbnRpY2F0ZSIsImlhdCI6MTQ2ODMzOTYwNiwiZXhwIjoxNDY4MzQzMjA2LCJuYmYiOjE0NjgzMzk2MDYsImp0aSI6ImE4OGVhZDVjYzE1MzRjYmUyZWU4NDVlNTc0MjgzYzAzIn0.4pG9sdnkgNmvz_wDkBUAvQHDSReYZCWghVZFg83dYJQ").success(function(response) {
      	$scope.notes = response.notes; 
   });*/

   //$httpProvider.defaults.headers.get = { 'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL2F1dGhlbnRpY2F0ZSIsImlhdCI6MTQ2ODMzOTYwNiwiZXhwIjoxNDY4MzQzMjA2LCJuYmYiOjE0NjgzMzk2MDYsImp0aSI6ImE4OGVhZDVjYzE1MzRjYmUyZWU4NDVlNTc0MjgzYzAzIn0.4pG9sdnkgNmvz_wDkBUAvQHDSReYZCWghVZFg83dYJQ' }

    /*$http.get('http://localhost:8000/api/allNotes').
        then(function(data) {
        	alert();
            $scope.notes = data;
        });*/

   $http({
  		method: 'GET',
  		headers:{'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL2F1dGhlbnRpY2F0ZSIsImlhdCI6MTQ2ODQyNjkzOSwiZXhwIjoxNDY4NDMwNTM5LCJuYmYiOjE0Njg0MjY5MzksImp0aSI6IjIzMDNiZDNmYzM0ZDM4MmRjNzg4NjM0ZGE3ZjEzNDQwIn0.zJnsWcx-Juy0LbVss80jbZPOPFp15e56r2Wp5msfe-k',
  				'Access-Control-Allow-Origin' : '*' },
  		url: 'http://localhost:8000/api/allNotes'
  	}).then(function(data) {
        	//alert();
            $scope.notes = data.data;
        });

});