const module = angular.module('phoneApp', [])
module.controller('PhoneController', function($scope) {
    $scope.model = viewModel(model())
})