var BlueSuit =  [{color: "blue", num: "1"}, {color: "blue", num: "2"}, {color: "blue", num: "3"}, {color: "blue", num: "4"}, {color: "blue", num: "5"}, 
                {color: "blue", num: "6"}, {color: "blue", num: "7"}, {color: "blue", num: "8"}, {color: "blue", num: "9"}, {color: "blue", num: "10"}, 
                {color: "blue", num: "11"}, {color: "blue", num: "12"}, {color: "blue", num: "13"}, {color: "blue", num: "14"}, {color: "blue", num: "15"}];

var RedSuit =   [{color: "red", num: "1"}, {color: "red", num: "2"}, {color: "red", num: "3"}, {color: "red", num: "4"}, {color: "red", num: "5"}, 
                {color: "red", num: "6"}, {color: "red", num: "7"}, {color: "red", num: "8"}, {color: "red", num: "9"}, {color: "red", num: "10"}, 
                {color: "red", num: "11"}, {color: "red", num: "12"}, {color: "red", num: "13"}, {color: "red", num: "14"}, {color: "red", num: "15"}];

var YellowSuit = [{color: "yellow", num: "1"}, {color: "yellow", num: "2"}, {color: "yellow", num: "3"}, {color: "yellow", num: "4"}, {color: "yellow", num: "5"}, 
                {color: "yellow", num: "6"}, {color: "yellow", num: "7"}, {color: "yellow", num: "8"}, {color: "yellow", num: "9"}, {color: "yellow", num: "10"}, 
                {color: "yellow", num: "11"}, {color: "yellow", num: "12"}, {color: "yellow", num: "13"}, {color: "yellow", num: "14"}, {color: "yellow", num: "15"}];

var GreenSuit = [{color: "green", num: "1"}, {color: "green", num: "2"}, {color: "green", num: "3"}, {color: "green", num: "4"}, {color: "green", num: "5"}, 
                {color: "green", num: "6"}, {color: "green", num: "7"}, {color: "green", num: "8"}, {color: "green", num: "9"}, {color: "green", num: "10"}, 
                {color: "green", num: "11"}, {color: "green", num: "12"}, {color: "green", num: "13"}, {color: "green", num: "14"}, {color: "green", num: "15"}];


angular.module('starter.controllers')

.controller('CreateGameCtrl', function($scope, $state, $stateParams, Users, Games) {
    
    $scope.userConnected = userConnected.auth.token;

    $scope.users = Users;

    $scope.games = Games;

    $scope.data = {
        userSelected: []
    };

    $scope.game = {};




    //$scope.userSelected = null;

    

    // $scope.auth = Auth;

    $scope.users.$loaded().then(function (user) {
        $scope.users = $scope.users[0];
        console.log($scope.users);
    });

    $scope.createGame = function() {
        console.log($scope.data.userSelected);
        if ($scope.data.userSelected != null) {
        $scope.games.$add({
            "name": $scope.game.name,
            "players": [$scope.userConnected.email, $scope.data.userSelected],
            "userTurn": $scope.userConnected.email,
            "gameState": "",
            "board":    [
                            [{value:"0"}, {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"},{value:"0"}, {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"}],
                            [{value:"0"}, {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"},{value:"0"}, {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"}],
                            [{value:"0"}, {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"},{value:"0"}, {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"}],
                            [{value:"0"}, {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"},{value:"0"}, {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"}],
                            [{value:"0"}, {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"1"}, {value:"0"} , {value:"0"},{value:"0"}, {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"}],
                            [{value:"0"}, {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"}, {value:"1"} , {value:"0"},{value:"0"}, {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"}],
                            [{value:"0"}, {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"},{value:"0"}, {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"}],
                            [{value:"0"}, {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"},{value:"0"}, {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"}],
                            [{value:"0"}, {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"},{value:"0"}, {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"}],
                            [{value:"0"}, {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"},{value:"0"}, {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"}],
                            [{value:"0"}, {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"},{value:"0"}, {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"}],
                            [{value:"0"}, {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"},{value:"0"}, {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"}],
                            [{value:"0"}, {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"},{value:"0"}, {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"}],
                            [{value:"0"}, {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"},{value:"0"}, {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"}],
                            [{value:"0"}, {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"},{value:"0"}, {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"}],
                        ]
        });
        $state.go('lobby');
        } else {
            console.log("Choose any rival to play!");
        }
    };
    
});