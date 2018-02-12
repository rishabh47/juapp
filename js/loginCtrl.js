  var app = angular.module('myApp', []);
  app.controller('loginCtrl', function($scope) {
      $scope.firstName = "John";
      $scope.lastName = "Doe";
  });
    app.directive('wjValidationError', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctl) {
        scope.$watch(attrs['wjValidationError'], function(errorMsg) {
          elm[0].setCustomValidity(errorMsg);
          ctl.$setValidity('wjValidationError', errorMsg ? false : true);
        });
      }
    };
  });
