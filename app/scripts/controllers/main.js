'use strict';

/**
 * @ngdoc function
 * @name expenseMgmtApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the expenseMgmtApp
 */
angular.module('expenseMgmtApp').controller('MainCtrl', function ($scope, $uibModal, $log, authorizer) {


    $scope.modalData = [];
    $scope.animationsEnabled = true;
    $scope.isLoggedIn = authorizer.isLoggedIn();
    $scope.numbersOnly = /^[0-9]+(\.[0-9]{1,2})?$/;
    $scope.dateFormat = /^(0?[1-9]|1[012])\/(0?[1-9]|[12][0-9]|3[01])\/((19\d{2})|([2-9]\d{3}))$/;

    $scope.addExpense = function () {

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/partials/add-expense-modal.html',
            controller: 'addExpenseModalCtrl'
        });

        modalInstance.result.then(function (data) {
            $scope.modalData.push(data);

        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

    $scope.toggleAnimation = function () {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };

    $scope.toggleShow = function(_this, status) {

        if (status !== 'Reimbursed'){
            _this.show = !_this.show;
        }
    };

    $scope.delete = function(_this,index) {
        $scope.modalData.splice(index, 1);
        _this.show = !_this.show;
    };

});
