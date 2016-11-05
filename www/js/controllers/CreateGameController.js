var BlueSuit =  [{color: "blue", value: "1"}, {color: "blue", value: "2"}, {color: "blue", value: "3"}, {color: "blue", value: "4"}, {color: "blue", value: "5"}, 
                {color: "blue", value: "6"}, {color: "blue", value: "7"}, {color: "blue", value: "8"}, {color: "blue", value: "9"}, {color: "blue", value: "10"}, 
                {color: "blue", value: "11"}, {color: "blue", value: "12"}, {color: "blue", value: "13"}, {color: "blue", value: "14"}, {color: "blue", value: "15"}];

var RedSuit =   [{color: "red", value: "1"}, {color: "red", value: "2"}, {color: "red", value: "3"}, {color: "red", value: "4"}, {color: "red", value: "5"}, 
                {color: "red", value: "6"}, {color: "red", value: "7"}, {color: "red", value: "8"}, {color: "red", value: "9"}, {color: "red", value: "10"}, 
                {color: "red", value: "11"}, {color: "red", value: "12"}, {color: "red", value: "13"}, {color: "red", value: "14"}, {color: "red", value: "15"}];

var YellowSuit = [{color: "yellow", value: "1"}, {color: "yellow", value: "2"}, {color: "yellow", value: "3"}, {color: "yellow", value: "4"}, {color: "yellow", value: "5"}, 
                {color: "yellow", value: "6"}, {color: "yellow", value: "7"}, {color: "yellow", value: "8"}, {color: "yellow", value: "9"}, {color: "yellow", value: "10"}, 
                {color: "yellow", value: "11"}, {color: "yellow", value: "12"}, {color: "yellow", value: "13"}, {color: "yellow", value: "14"}, {color: "yellow", value: "15"}];

var GreenSuit = [{color: "green", value: "1"}, {color: "green", value: "2"}, {color: "green", value: "3"}, {color: "green", value: "4"}, {color: "green", value: "5"}, 
                {color: "green", value: "6"}, {color: "green", value: "7"}, {color: "green", value: "8"}, {color: "green", value: "9"}, {color: "green", value: "10"}, 
                {color: "green", value: "11"}, {color: "green", value: "12"}, {color: "green", value: "13"}, {color: "green", value: "14"}, {color: "green", value: "15"}];


angular.module('starter.controllers')

.controller('CreateGameCtrl', function($scope, $state, $stateParams, Users, Games, Chats) {
    
    $scope.userConnected = userConnected.auth.token;

    $scope.users = Users;

    $scope.games = Games;

    $scope.chats = Chats;

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
        var allChips = [];
        //allChips.push(BlueSuit, RedSuit, YellowSuit, GreenSuit);
        allChips = allChips.concat(BlueSuit, RedSuit, YellowSuit, GreenSuit);
        allChips = shuffle(allChips);
        var player1Chips = [];
        for (var i = 0; i < 15; ++i) {
            player1Chips.push(allChips[i]);
            allChips.shift();
        }
        var player2Chips =  [];
        for (var i = 0; i < 15; ++i) {
            player2Chips.push(allChips[i]);
            allChips.shift();
        }
        var board = [];
        for (var i = 0; i < 15; ++i) {
            var row = [];
            for (var j = 0; j < 15; ++j) {
                row.push({
                    "chipId" : "",
                    "color" : "",
                    "value" : 0
                });
            }
            board.push(row);
        }

        /* Workarround to implement the checker algorithm */
        player1Chips = [{color: "red", value: "1"}, {color: "red", value: "2"}, {color: "red", value: "3"}];


        if ($scope.data.userSelected != null) {
            $scope.games.$add({
                "name": $scope.game.name,
                "players": [$scope.userConnected.email, $scope.data.userSelected],
                "userTurn": 0,
                "gameState": "",
                "board": board,
                "playersChips": [player1Chips, player2Chips],
                "gameChips": allChips,
                "winner": ""
            });

            $scope.chats.$add({
                "gameName" : $scope.game.name,
                "users" : [$scope.userConnected.email, $scope.data.userSelected],
                "messages" : [{
                    "sender_username" : $scope.userConnected.email,
                    "content" : "Hello! Hello"
                }]
            });
        $state.go('lobby');
        } else {
            console.log("Choose any rival to play!");
        }
    };


    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
    
});



// "board":    [
//                                 [{color:"", color:"", value:"0"}, {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"},{color:"", value:"0"}, {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"}],
//                                 [{color:"", value:"0"}, {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"},{color:"", value:"0"}, {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"}],
//                                 [{color:"", value:"0"}, {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"},{color:"", value:"0"}, {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"}],
//                                 [{color:"", value:"0"}, {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"},{color:"", value:"0"}, {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"}],
//                                 [{color:"", value:"0"}, {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"},{color:"", value:"0"}, {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"}],
//                                 [{color:"", value:"0"}, {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"},{color:"", value:"0"}, {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"}],
//                                 [{color:"", value:"0"}, {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"},{color:"", value:"0"}, {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"}],
//                                 [{color:"", value:"0"}, {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"},{color:"", value:"0"}, {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"}],
//                                 [{color:"", value:"0"}, {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"},{color:"", value:"0"}, {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"}],
//                                 [{color:"", value:"0"}, {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"},{color:"", value:"0"}, {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"}],
//                                 [{color:"", value:"0"}, {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"},{color:"", value:"0"}, {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"}],
//                                 [{color:"", value:"0"}, {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"},{color:"", value:"0"}, {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"}],
//                                 [{color:"", value:"0"}, {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"},{color:"", value:"0"}, {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"}],
//                                 [{color:"", value:"0"}, {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"},{color:"", value:"0"}, {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"}],
//                                 [{color:"", value:"0"}, {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"},{color:"", value:"0"}, {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"} , {color:"", value:"0"}, {color:"", value:"0"}],
//                             ],