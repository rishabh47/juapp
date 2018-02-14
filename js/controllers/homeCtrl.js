(function() {
  var app = angular.module("juApp");

  var homeCtrl = function($scope, $location) {
    $scope.branches = ['CSE','MECHANICAL','CIVIL','ECE','EEE','MECHATRONICS'];
    $scope.semesters = ['First', 'Second','Third','Fourth','Fifth','Sixth','Seventh','Eighth'];
    $scope.batches = ['2012','2013','2014','2015','2016','2017'];
    $scope.submit = function(){
        $location.path('/main')
    }
  };
  app.controller("homeCtrl", homeCtrl);


}());
