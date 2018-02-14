(function() {
  var app = angular.module("juApp");

  var loginCtrl = function($scope, $location) {
    $scope.submit = function(){
        $location.path('/home')
    }
    $scope.signup = function(){
        $location.path('/signup')
    }
  };
  app.controller("loginCtrl", loginCtrl);


}());
