angular.module('starter.controllers')

.controller('ChatCtrl', function($scope, $state, $stateParams, $rootScope, Chats, $firebaseArray, $ionicScrollDelegate) {
    $scope.chats = Chats;

	$scope.chat = {};
	$scope.messages = [];

	$scope.newMessage = "";

	$scope.chats.$loaded().then(function (chats) {
        // actualGame passed by parameter
        $scope.actualGame = angular.fromJson($stateParams.actualGame);
        $scope.actualGame = $scope.actualGame.actualGame;

		for (var i = 0; i < $scope.chats.length; ++i) {
			if ($scope.chats[i].gameName == $scope.actualGame.name) {
				$scope.chat = $scope.chats[i];
			}
		}
		$scope.messages = $scope.chat.messages;

    });


	$scope.sendMessage = function(newMessage) {
		console.log(newMessage);
		var refChat = new Firebase(firebaseUrl + "/chats/" + $scope.chat.$id + "/messages");
		$firebaseArray(refChat).$add({
			"content" : newMessage,
			"sender_username" : userConnected.password.email
		});
		for (var i = 0; i < $scope.chats.length; ++i) {
			if ($scope.chats[i].gameName == $scope.actualGame.name) {
				$scope.chat = $scope.chats[i];
			}
		}
		$scope.messages = $scope.chat.messages;
        $ionicScrollDelegate.$getByHandle('chatScroll').scrollBottom(true);
 		$scope.newMessage = "";
	}

});