'use strict';
/**
 * @ngdoc overview
 * @name Router
 * @description
 * # Router
 *
 * Router module of the application. All routes for the application are defined here.
 */
angular.module('routing', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl'
        })
        .state('ra', {  // we are abstracting ra route so that we can catch a reject promise in case user is not logged in.
            abstract: true,
            resolve: {
                auth: function(authorizer, $state, $timeout) {
                    return authorizer.isLoggedInReturnedAsPromise().then(function(){ //logged in
                        
                    },function () { //not logged in
                             $timeout(function(){ $state.go('login', {}, { reload: true });},0);
                    });
                }
            },
            template: '<div ui-view></div>'
        }) 
        
        
        
        .state('ra.main', {
            url: '/',
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
    });

});