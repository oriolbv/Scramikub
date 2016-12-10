angular.module('starter.controllers')

.controller('LobbyCtrl', function($scope, $state, $stateParams, $rootScope, Games) {
    
    $scope.userConnected = userConnected.auth.token;
    
    $scope.games = Games;
    $scope.gamesToPlay = [];
    $scope.gamesToWait = [];

    $scope.games.$loaded().then(function (games) {
        console.log($scope.games);
        var auxGames = [];
        for (var i = 0; i < $scope.games.length; ++i) {
            var game = $scope.games[i];
            for (var j = 0; j < game.players.length; ++j) {
                if (game.players[j] == userConnected.password.email) {
                    if (game.players[game.userTurn] == userConnected.password.email) {
                        game.gameState = "It's your turn! Click to play!"
                        $scope.gamesToPlay.push(game);

                    }
                    else {
                        game.gameState = "It's not your turn. Waiting for other users..."
                        $scope.gamesToWait.push(game);
                    }
                    auxGames.push(game);
                }
            }
        }
        $scope.games = auxGames;
    });


    $scope.clickGame = function(game){
        if (game.players[game.userTurn] == userConnected.password.email) {
            var actualGame = angular.toJson({ "actualGame": game});
            $state.go('game', { 'actualGame': actualGame });
        } else {
            alert("It's not your turn! Wait for the other players ...");
        }
    };


    $scope.startGame = function() {
        console.log($scope.games);
    };

    $scope.addGame = function() {
    	$state.go('create-game');
  	};
});