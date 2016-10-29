angular.module('starter.controllers')

.controller('LobbyCtrl', function($scope, $state, $stateParams, $rootScope, Games) {
    
    $scope.userConnected = userConnected.auth.token;
    
    $scope.games = Games;

    $scope.games.$loaded().then(function (games) {
        console.log($scope.games);
        var auxGames = [];
        for (var i = 0; i < $scope.games.length; ++i) {
            var game = $scope.games[i];
            for (var j = 0; j < game.players.length; ++j) {
                if (game.players[j] == userConnected.password.email) {
                    if (game.players[game.userTurn] == userConnected.password.email) {
                        game.gameState = "It's your turn! Click to play!"
                    }
                    else {
                        game.gameState = "It's not your turn. Waiting for other users..."
                    }
                    auxGames.push(game);
                }
            }
        }
        $scope.games = auxGames;
    });


    $scope.clickGame = function(game){
        alert('Clicked: '+game.userTurn)
        var actualGame = angular.toJson({ "actualGame": game});
        $state.go('game', { 'actualGame': actualGame });
    };


    $scope.startGame = function() {
        console.log($scope.games);
    };

    $scope.addGame = function() {
    	$state.go('create-game');
  	};
});