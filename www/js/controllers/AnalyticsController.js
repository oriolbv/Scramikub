angular.module('starter.controllers')

.controller('AnalyticsCtrl', function($scope, $state, $stateParams) {
    $scope.labels = ["Games won", "Lost games"];
    $scope.data = [12, 6];
});