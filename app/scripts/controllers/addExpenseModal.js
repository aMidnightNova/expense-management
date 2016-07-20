'use strict';

/**
 * @ngdoc function
 * @name expenseMgmt.controller:addExpenseModal
 * @description
 * # addExpenseModalCtrl
 * Controller
 */
angular.module('expenseMgmtApp').controller('addExpenseModalCtrl', function ($scope, $uibModalInstance) {
    $scope.modalData = {
        status:'New',
        merchant: '',
        expense: '',
        date: '',
        comments: ''


    };
    $scope.numbersOnly = /^[0-9]+(\.[0-9]{1,2})?$/;
    $scope.dateFormat = /^(0?[1-9]|1[012])\/(0?[1-9]|[12][0-9]|3[01])\/((19\d{2})|([2-9]\d{3}))$/;


    $scope.ok = function () {
        $uibModalInstance.close($scope.modalData);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };


});