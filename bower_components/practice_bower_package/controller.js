 app .controller('controller', ['$scope', '$controller', function($scope, $controller){
    
              $scope.height = 180;                   //default height and width
              $scope.width = 160;

  $controller('myContrl', {$scope: $scope});
     
}]);