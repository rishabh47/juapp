
(function(){

    var app = angular.module('juApp',['ui.router', 'ui.bootstrap', 'ngSanitize', 'ui.select','ui.uploader']);
    app.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl : "./Templates/home.html",
                controller: 'homeCtrl'
            })
            .state('login', {
                url: '/',
                templateUrl : "./Templates/login.html",
                controller: 'loginCtrl'
            })
            .state('signup', {
                url: '/signup',
                templateUrl : "./Templates/signup.html",
                controller: 'signupCtrl'
            })


            .state('main', {
                url: '/main',
                templateUrl : "./Templates/main.html",
                controller: 'mainCtrl'
            })
    });
}());
