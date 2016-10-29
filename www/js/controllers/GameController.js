angular.module('starter.controllers')

.controller('GameCtrl', function($scope, $state, $stateParams, $rootScope, $ionicScrollDelegate, Games) {

    $scope.games = Games;

    $scope.onDragStart = function($data, $event, $ionicScrollDelegate) {
        console.log("hola");
        
    }

    $scope.board = [];

    $scope.actualGame = {};

    // $scope.chips = [{number:"1", color:"red"},{number:"2", color:"blue"},{number:"3", color:"blue"}];

    $scope.draggableObjects = [{name:"1", color:"red"},{name:"2", color:"blue"}];

    $scope.droppedObjects1 = [];
    $scope.droppedObjects2 = [];
    $scope.centerAnchor = true;


    $scope.onDropComplete1 = function (data, evt, i, j) {
        var index = $scope.droppedObjects1.indexOf(data);
        if (index == -1)
            $scope.droppedObjects1.push(data);
    }
    $scope.onDragComplete = function (data, evt) {
        console.log("133", "$scope", "onDragSuccess1", "", evt);
        var index = $scope.droppedObjects1.indexOf(data);
        if (index > -1) {
            $scope.droppedObjects1.splice(index, 1);
        }
    }

    var inArray = function (array, obj) {
        var index = array.indexOf(obj);
    }

    $scope.games.$loaded().then(function (games) {
        // actualGame passed by parameter
        $scope.actualGame = angular.fromJson($stateParams.actualGame);
        $scope.actualGame = $scope.actualGame.actualGame;
        $scope.board = $scope.actualGame.board;
    });

    $scope.playMove = function(){
        $scope.games.$loaded().then(function (games) {

            // We need the position in players array of the actual player
            $scope.actualGame = angular.copy($scope.actualGame);
            var userTurnPos = 0;
            for (var i = 0; i < $scope.actualGame.players.length; ++i) {
                if ($scope.actualGame.userTurn == $scope.actualGame.players[i]) {
                    // If userTurn is the last of the list ...
                    if (i == $scope.actualGame.players.length-1) {
                        userTurnPos = 0;
                    } else {
                        userTurnPos = i + 1;
                    }
                }
            }
            $scope.actualGame.userTurn = $scope.actualGame.players[userTurnPos];
            // Normalize board
            $scope.actualGame.board = $scope.board;
            $scope.actualGame = angular.copy($scope.actualGame);
            games.$ref().child($scope.actualGame.$id).set({
                "name": $scope.actualGame.name,
                "players": $scope.actualGame.players,
                "userTurn": $scope.actualGame.userTurn,
                "gameState": $scope.actualGame.gameState,
                "board": $scope.actualGame.board
            });
            $state.go('lobby');
        });
    };

});
