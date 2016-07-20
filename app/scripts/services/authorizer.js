'use strict';

/**
 * @ngdoc service
 * @name expenseMgmt.service: Authorizer
 * @description
 * The service that provides methods for user Auth.
 */
angular.module('expenseMgmtApp').service('authorizer', function ($q, $state) {



    var _isLoggedIn = false;
    this.isLoggedInReturnedAsPromise = function ( ) { // because of the way that the ui-router works wee need to return a promise to not go into a loop of successes.
        var _q = $q.defer();
        if (_isLoggedIn) {
            _q.resolve('logged in');
        } else {
            _q.reject('not logged in');
        }
        return _q.promise;

    };
    this.isLoggedIn = function () { 
        return _isLoggedIn ;
    };
    
    
    this.login = function (authData, errorCallback) { 

        if(authData.username ==='demo' && authData.password ==='demo'){
            _isLoggedIn = true ;
            $state.go('ra.main',{},{reload:true});
        } else {
            errorCallback({ type: 'danger', msg: 'Invalid username or password!' });
        }

    };
    
    this.logout = function () {
        _isLoggedIn = false ;
    };

});

