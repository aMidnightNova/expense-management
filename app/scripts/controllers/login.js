'use strict';

/**
 * @ngdoc function
 * @name expenseMgmtApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the login page.
 */
angular.module('expenseMgmtApp').controller('LoginCtrl', function ($scope, $state, authorizer) {



    if(authorizer.isLoggedIn()){
        $state.go('ra.main',{},{reload:true});
        return;
    }


    $scope.authData = {};
    
    $scope.alerts = [];
    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };


    $scope.login = function () {
        function errorCallback (error) {
            $scope.alerts.push(error);
        }
        authorizer.login($scope.authData,errorCallback);
    };
    
    $scope.logout = function () {
        authorizer.logout();
    };






});