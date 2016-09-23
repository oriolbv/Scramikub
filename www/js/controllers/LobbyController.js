angular.module('starter.controllers')

.controller('LobbyCtrl', function($scope, $state, $stateParams, $rootScope, Games) {
    
    $scope.userConnected = userConnected.auth.token;
    
    $scope.games = Games;

    $scope.games.$loaded().then(function (games) {
        console.log($scope.games);
        var auxGames = [];
        // for (var i = 0; i < $scope.games.size(); ++i) {
            
        // }

    });


    $scope.clickGame = function(item){
        alert('Clicked: '+item.id)
    };


    $scope.startGame = function() {
        console.log($scope.games);
    };

    $scope.addGame = function() {
    	$state.go('create-game');
  	};
});