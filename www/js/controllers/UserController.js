angular.module('starter.controllers')

.controller('UserCtrl', function($scope, $state, $stateParams) {
    $scope.labels = ["Games won", "Lost games"];
    $scope.data = [userInfo.gamesWon, userInfo.gamesLost];

	$scope.userConnected = userInfo;
	$scope.img = "img/unknown.png";
});