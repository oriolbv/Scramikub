angular.module('starter.controllers')

.controller('SelectPlayersCtrl', function($scope, $state, $stateParams, Users, $ionicPopup) {
    $scope.users = Users;
	
	$scope.userInfo = userInfo;

	$scope.usersSelected = [userInfo.email];

	$scope.numPlayers = 0;

	$scope.users.$loaded().then(function (user) {
        $scope.users = $scope.users[0];
		$scope.numPlayers = angular.fromJson($stateParams.numPlayers);
        console.log($scope.users);
    });

	$scope.onChange = function(user) {
		var userExist = false;
		var userIndex = 0;
		for (var i = 0; i < $scope.usersSelected.length; ++i) {
			if ($scope.usersSelected[i] == user.email) {
				// user was selected 
				userExist = true;
				userIndex = i;
			}
		}
		if (userExist) {
			$scope.usersSelected.splice(userIndex, 1);
		} else {
			$scope.usersSelected.push(user.email);
		}
		console.log($scope.usersSelected);
	}

	$scope.selectPlayers = function() {
		if ($scope.numPlayers != $scope.usersSelected.length) {
			var alertPopup = $ionicPopup.alert({
				title: 'Error',
				template: 'You are not selecting the players correctly!'
			});
		} else {
			$state.go('create-game', {'players' : $scope.usersSelected});
		}
	}
});