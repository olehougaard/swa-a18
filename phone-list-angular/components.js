const module = angular.module('phoneApp', [])
module.value('$model', viewModel(model()))
module.component('modelInput', {
    bindings: { propertyName: '@' },
    template: '<input ng-model="$ctrl.model[$ctrl.propertyName]">',
    controller: ['$model', function ($model) {
        this.model = $model
    }]            
})
module.component('phoneTable', {
    template:   '<table>' +
                    '<tr ng-repeat="phone in $ctrl.model.phones">' +
                        '<td>{{phone.name()}}</td><td>{{phone.snippet()}}</td>' +
                    '</tr>' +
                '<table>',
    controller: ['$model', function ($model) {
        this.model = $model
    }]
})
module.controller('PhoneController', function($scope, $model) {
    $scope.model = $model
})