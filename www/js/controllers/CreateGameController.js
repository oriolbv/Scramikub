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
        allChips = allChips.concat(BlueSuit1, RedSuit1, YellowSuit1, GreenSuit1, Joker1, Joker2, Joker3);
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
                    "value" : 0,
                    "imgLink" : "",
                    "row" : "",
                    "column" : ""

                });
            }
            board.push(row);
        }

        /* Workarround to implement the checker algorithm */
        //player1Chips = [{color: "red", value: "1"}, {color: "red", value: "2"}, {color: "red", value: "3"}];

        // Checking chips
        var playerChips = [];
        for (var i = 0; i < 15; i++) {
            playerChips.push(player1Chips[i]);
        }
        for (var i = 0; i < 15; i++) {
            playerChips.push(player2Chips[i]);
        }

        var repitedChips = 0;
        for (var iChips = 0; iChips < 30; ++iChips) {
            var chip = playerChips[iChips];
            for (var jChips = 0; jChips < 30; ++jChips) {
                if (allChips[jChips] != null) {
                    if (chip.chipId == allChips[jChips].chipId) {
                        repitedChips++;
                        console.log(allChips[jChips]);
                        var index = allChips.indexOf(allChips[jChips]);
                        if (index > -1) {
                            allChips.splice(index, 1);
                        }
                    }
                }
                
            }
        }
        console.log("Repited Chips: " + repitedChips);

        var repitedChips = 0;
        for (var iChips = 0; iChips < 30; ++iChips) {
            var chip = playerChips[iChips];
            for (var jChips = 0; jChips < 30; ++jChips) {
                if (allChips[jChips] != null) {
                    if (chip.chipId == allChips[jChips].chipId) {
                        repitedChips++;
                        console.log(allChips[jChips]);
                    }
                }
            }
        }
        console.log("New Repited Chips: " + repitedChips);

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
        
        


        $state.go('initial');
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

var Joker1 = {chipId: "jkr1", color: "joker", value: 100, row: "", column: "", imgLink: "img/joker.png"};
var Joker2 = {chipId: "jkr2", color: "joker", value: 100, row: "", column: "", imgLink: "img/joker.png"};
var Joker3 = {chipId: "jkr3", color: "joker", value: 100, row: "", column: "", imgLink: "img/joker.png"};

var BlueSuit1 =  [   {chipId: "1b1", color: "blue", value: 1, row: "", column: "", imgLink: "img/1b.png"}, 
                    {chipId: "1b2", color: "blue", value: 2, row: "", column: "", imgLink: "img/2b.png"}, 
                    {chipId: "1b3", color: "blue", value: 3, row: "", column: "", imgLink: "img/3b.png"}, 
                    {chipId: "1b4", color: "blue", value: 4, row: "", column: "", imgLink: "img/4b.png"}, 
                    {chipId: "1b5", color: "blue", value: 5, row: "", column: "", imgLink: "img/5b.png"}, 
                    {chipId: "1b6", color: "blue", value: 6, row: "", column: "", imgLink: "img/6b.png"}, 
                    {chipId: "1b7", color: "blue", value: 7, row: "", column: "", imgLink: "img/7b.png"},  
                    {chipId: "1b8", color: "blue", value: 8, row: "", column: "", imgLink: "img/8b.png"},  
                    {chipId: "1b9", color: "blue", value: 9, row: "", column: "", imgLink: "img/9b.png"},  
                    {chipId: "1b10", color: "blue", value: 10, row: "", column: "", imgLink: "img/10b.png"},  
                    {chipId: "1b11", color: "blue", value: 11, row: "", column: "", imgLink: "img/11b.png"},
                    {chipId: "1b12", color: "blue", value: 12, row: "", column: "", imgLink: "img/12b.png"},  
                    {chipId: "1b13", color: "blue", value: 13, row: "", column: "", imgLink: "img/13b.png"},  
                    {chipId: "1b14", color: "blue", value: 14, row: "", column: "", imgLink: "img/14b.png"},  
                    {chipId: "1b15", color: "blue", value: 15, row: "", column: "", imgLink: "img/15b.png"} ];

var RedSuit1 =  [    {chipId: "1r1", color: "red", value: 1, row: "", column: "", imgLink: "img/1r.png"}, 
                    {chipId: "1r2", color: "red", value: 2, row: "", column: "", imgLink: "img/2r.png"}, 
                    {chipId: "1r3", color: "red", value: 3, row: "", column: "", imgLink: "img/3r.png"}, 
                    {chipId: "1r4", color: "red", value: 4, row: "", column: "", imgLink: "img/4r.png"}, 
                    {chipId: "1r5", color: "red", value: 5, row: "", column: "", imgLink: "img/5r.png"}, 
                    {chipId: "1r6", color: "red", value: 6, row: "", column: "", imgLink: "img/6r.png"}, 
                    {chipId: "1r7", color: "red", value: 7, row: "", column: "", imgLink: "img/7r.png"},  
                    {chipId: "1r8", color: "red", value: 8, row: "", column: "", imgLink: "img/8r.png"},  
                    {chipId: "1r9", color: "red", value: 9, row: "", column: "", imgLink: "img/9r.png"},  
                    {chipId: "1r10", color: "red", value: 10, row: "", column: "", imgLink: "img/10r.png"},  
                    {chipId: "1r11", color: "red", value: 11, row: "", column: "", imgLink: "img/11r.png"},
                    {chipId: "1r12", color: "red", value: 12, row: "", column: "", imgLink: "img/12r.png"},  
                    {chipId: "1r13", color: "red", value: 13, row: "", column: "", imgLink: "img/13r.png"},  
                    {chipId: "1r14", color: "red", value: 14, row: "", column: "", imgLink: "img/14r.png"},  
                    {chipId: "1r15", color: "red", value: 15, row: "", column: "", imgLink: "img/15r.png"} ];

var YellowSuit1 =  [ {chipId: "1y1", color: "yellow", value: 1, row: "", column: "", imgLink: "img/1y.png"}, 
                    {chipId: "1y2", color: "yellow", value: 2, row: "", column: "", imgLink: "img/2y.png"}, 
                    {chipId: "1y3", color: "yellow", value: 3, row: "", column: "", imgLink: "img/3y.png"}, 
                    {chipId: "1y4", color: "yellow", value: 4, row: "", column: "", imgLink: "img/4y.png"}, 
                    {chipId: "1y5", color: "yellow", value: 5, row: "", column: "", imgLink: "img/5y.png"}, 
                    {chipId: "1y6", color: "yellow", value: 6, row: "", column: "", imgLink: "img/6y.png"}, 
                    {chipId: "1y7", color: "yellow", value: 7, row: "", column: "", imgLink: "img/7y.png"},  
                    {chipId: "1y8", color: "yellow", value: 8, row: "", column: "", imgLink: "img/8y.png"},  
                    {chipId: "1y9", color: "yellow", value: 9, row: "", column: "", imgLink: "img/9y.png"},  
                    {chipId: "1y10", color: "yellow", value: 10, row: "", column: "", imgLink: "img/10y.png"},  
                    {chipId: "1y11", color: "yellow", value: 11, row: "", column: "", imgLink: "img/11y.png"},
                    {chipId: "1y12", color: "yellow", value: 12, row: "", column: "", imgLink: "img/12y.png"},  
                    {chipId: "1y13", color: "yellow", value: 13, row: "", column: "", imgLink: "img/13y.png"},  
                    {chipId: "1y14", color: "yellow", value: 14, row: "", column: "", imgLink: "img/14y.png"},  
                    {chipId: "1y15", color: "yellow", value: 15, row: "", column: "", imgLink: "img/15y.png"} ];

var GreenSuit1 =  [ {chipId: "1g1", color: "green", value: 1, row: "", column: "", imgLink: "img/1g.png"}, 
                    {chipId: "1g2", color: "green", value: 2, row: "", column: "", imgLink: "img/2g.png"}, 
                    {chipId: "1g3", color: "green", value: 3, row: "", column: "", imgLink: "img/3g.png"}, 
                    {chipId: "1g4", color: "green", value: 4, row: "", column: "", imgLink: "img/4g.png"}, 
                    {chipId: "1g5", color: "green", value: 5, row: "", column: "", imgLink: "img/5g.png"}, 
                    {chipId: "1g6", color: "green", value: 6, row: "", column: "", imgLink: "img/6g.png"}, 
                    {chipId: "1g7", color: "green", value: 7, row: "", column: "", imgLink: "img/7g.png"},  
                    {chipId: "1g8", color: "green", value: 8, row: "", column: "", imgLink: "img/8g.png"},  
                    {chipId: "1g9", color: "green", value: 9, row: "", column: "", imgLink: "img/9g.png"},  
                    {chipId: "1g10", color: "green", value: 10, row: "", column: "", imgLink: "img/10g.png"},  
                    {chipId: "1g11", color: "green", value: 11, row: "", column: "", imgLink: "img/11g.png"},
                    {chipId: "1g12", color: "green", value: 12, row: "", column: "", imgLink: "img/12g.png"},  
                    {chipId: "1g13", color: "green", value: 13, row: "", column: "", imgLink: "img/13g.png"},  
                    {chipId: "1g14", color: "green", value: 14, row: "", column: "", imgLink: "img/14g.png"},  
                    {chipId: "1g15", color: "green", value: 15, row: "", column: "", imgLink: "img/15g.png"} ];

var BlueSuit2 =  [  {chipId: "2b1", color: "blue", value: 1, row: "", column: "", imgLink: "img/1b.png"}, 
                    {chipId: "2b2", color: "blue", value: 2, row: "", column: "", imgLink: "img/2b.png"}, 
                    {chipId: "2b3", color: "blue", value: 3, row: "", column: "", imgLink: "img/3b.png"}, 
                    {chipId: "2b4", color: "blue", value: 4, row: "", column: "", imgLink: "img/4b.png"}, 
                    {chipId: "2b5", color: "blue", value: 5, row: "", column: "", imgLink: "img/5b.png"}, 
                    {chipId: "2b6", color: "blue", value: 6, row: "", column: "", imgLink: "img/6b.png"}, 
                    {chipId: "2b7", color: "blue", value: 7, row: "", column: "", imgLink: "img/7b.png"},  
                    {chipId: "2b8", color: "blue", value: 8, row: "", column: "", imgLink: "img/8b.png"},  
                    {chipId: "2b9", color: "blue", value: 9, row: "", column: "", imgLink: "img/9b.png"},  
                    {chipId: "2b10", color: "blue", value: 10, row: "", column: "", imgLink: "img/10b.png"},  
                    {chipId: "2b11", color: "blue", value: 11, row: "", column: "", imgLink: "img/11b.png"},
                    {chipId: "2b12", color: "blue", value: 12, row: "", column: "", imgLink: "img/12b.png"},  
                    {chipId: "2b13", color: "blue", value: 13, row: "", column: "", imgLink: "img/13b.png"},  
                    {chipId: "2b14", color: "blue", value: 14, row: "", column: "", imgLink: "img/14b.png"},  
                    {chipId: "2b15", color: "blue", value: 15, row: "", column: "", imgLink: "img/15b.png"} ];

var RedSuit2 =  [   {chipId: "2r1", color: "red", value: 1, row: "", column: "", imgLink: "img/1r.png"}, 
                    {chipId: "2r2", color: "red", value: 2, row: "", column: "", imgLink: "img/2r.png"}, 
                    {chipId: "2r3", color: "red", value: 3, row: "", column: "", imgLink: "img/3r.png"}, 
                    {chipId: "2r4", color: "red", value: 4, row: "", column: "", imgLink: "img/4r.png"}, 
                    {chipId: "2r5", color: "red", value: 5, row: "", column: "", imgLink: "img/5r.png"}, 
                    {chipId: "2r6", color: "red", value: 6, row: "", column: "", imgLink: "img/6r.png"}, 
                    {chipId: "2r7", color: "red", value: 7, row: "", column: "", imgLink: "img/7r.png"},  
                    {chipId: "2r8", color: "red", value: 8, row: "", column: "", imgLink: "img/8r.png"},  
                    {chipId: "2r9", color: "red", value: 9, row: "", column: "", imgLink: "img/9r.png"},  
                    {chipId: "2r10", color: "red", value: 10, row: "", column: "", imgLink: "img/10r.png"},  
                    {chipId: "2r11", color: "red", value: 11, row: "", column: "", imgLink: "img/11r.png"},
                    {chipId: "2r12", color: "red", value: 12, row: "", column: "", imgLink: "img/12r.png"},  
                    {chipId: "2r13", color: "red", value: 13, row: "", column: "", imgLink: "img/13r.png"},  
                    {chipId: "2r14", color: "red", value: 14, row: "", column: "", imgLink: "img/14r.png"},  
                    {chipId: "2r15", color: "red", value: 15, row: "", column: "", imgLink: "img/15r.png"} ];

var YellowSuit2 =  [{chipId: "2y1", color: "yellow", value: 1, row: "", column: "", imgLink: "img/1y.png"}, 
                    {chipId: "2y2", color: "yellow", value: 2, row: "", column: "", imgLink: "img/2y.png"}, 
                    {chipId: "2y3", color: "yellow", value: 3, row: "", column: "", imgLink: "img/3y.png"}, 
                    {chipId: "2y4", color: "yellow", value: 4, row: "", column: "", imgLink: "img/4y.png"}, 
                    {chipId: "2y5", color: "yellow", value: 5, row: "", column: "", imgLink: "img/5y.png"}, 
                    {chipId: "2y6", color: "yellow", value: 6, row: "", column: "", imgLink: "img/6y.png"}, 
                    {chipId: "2y7", color: "yellow", value: 7, row: "", column: "", imgLink: "img/7y.png"},  
                    {chipId: "2y8", color: "yellow", value: 8, row: "", column: "", imgLink: "img/8y.png"},  
                    {chipId: "2y9", color: "yellow", value: 9, row: "", column: "", imgLink: "img/9y.png"},  
                    {chipId: "2y10", color: "yellow", value: 10, row: "", column: "", imgLink: "img/10y.png"},  
                    {chipId: "2y11", color: "yellow", value: 11, row: "", column: "", imgLink: "img/11y.png"},
                    {chipId: "2y12", color: "yellow", value: 12, row: "", column: "", imgLink: "img/12y.png"},  
                    {chipId: "2y13", color: "yellow", value: 13, row: "", column: "", imgLink: "img/13y.png"},  
                    {chipId: "2y14", color: "yellow", value: 14, row: "", column: "", imgLink: "img/14y.png"},  
                    {chipId: "2y15", color: "yellow", value: 15, row: "", column: "", imgLink: "img/15y.png"} ];

var GreenSuit2 =  [ {chipId: "2g1", color: "green", value: 1, row: "", column: "", imgLink: "img/1g.png"}, 
                    {chipId: "2g2", color: "green", value: 2, row: "", column: "", imgLink: "img/2g.png"}, 
                    {chipId: "2g3", color: "green", value: 3, row: "", column: "", imgLink: "img/3g.png"}, 
                    {chipId: "2g4", color: "green", value: 4, row: "", column: "", imgLink: "img/4g.png"}, 
                    {chipId: "2g5", color: "green", value: 5, row: "", column: "", imgLink: "img/5g.png"}, 
                    {chipId: "2g6", color: "green", value: 6, row: "", column: "", imgLink: "img/6g.png"}, 
                    {chipId: "2g7", color: "green", value: 7, row: "", column: "", imgLink: "img/7g.png"},  
                    {chipId: "2g8", color: "green", value: 8, row: "", column: "", imgLink: "img/8g.png"},  
                    {chipId: "2g9", color: "green", value: 9, row: "", column: "", imgLink: "img/9g.png"},  
                    {chipId: "2g10", color: "green", value: 10, row: "", column: "", imgLink: "img/10g.png"},  
                    {chipId: "2g11", color: "green", value: 11, row: "", column: "", imgLink: "img/11g.png"},
                    {chipId: "2g12", color: "green", value: 12, row: "", column: "", imgLink: "img/12g.png"},  
                    {chipId: "2g13", color: "green", value: 13, row: "", column: "", imgLink: "img/13g.png"},  
                    {chipId: "2g14", color: "green", value: 14, row: "", column: "", imgLink: "img/14g.png"},  
                    {chipId: "2g15", color: "green", value: 15, row: "", column: "", imgLink: "img/15g.png"} ];