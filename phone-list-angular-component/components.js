const module = angular.module('phoneApp', [])
module.value('$model', viewModel(model()))
module.component('modelInput', {
    bindings: { propertyName: '@' },
    template: '<input ng-model="$ctrl.model[$ctrl.propertyName]">',
    controller: ['$model', function ($model) {
        this.model = $model
    }]            
})
module.component('objectTable', {
    bindings: { propertyName: '@',
                objectProperties: '<' },
    template:   '<table>' +
                    '<tr ng-repeat="obj in $ctrl.model[$ctrl.propertyName]">' +
                        '<td ng-repeat="x in $ctrl.objectProperties">{{obj[x]}}</td>' +
                    '</tr>' +
                '</table>',
    controller: ['$model', function ($model) {
        this.model = $model
    }]
})
module.controller('PhoneController', function($scope, $model) {
    $scope.model = $model
})