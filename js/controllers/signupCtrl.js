(function() {
  var app = angular.module("juApp");

  var signupCtrl = function($scope, $location) {
    $scope.login = function(){
        $location.path('/login')
    }
  };
  app.controller("signupCtrl", signupCtrl);


}());
