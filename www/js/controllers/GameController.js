angular.module('starter.controllers')

.controller('GameCtrl', function($scope, $state, $stateParams, $rootScope, $ionicScrollDelegate, Games) {

    $scope.games = Games;

    $scope.onDragStart = function($data, $event, $ionicScrollDelegate) {
        console.log("hola");
        
    }

    $scope.board = [];

    $scope.actualGame = {};

    // $scope.chips = [{number:"1", color:"red"},{number:"2", color:"blue"},{number:"3", color:"blue"}];

    $scope.draggableObjects = [{id: "1r1", color: "red", value: 1}, {id:"1r2" ,color: "red", value: 2}, {id:"1r3" ,color: "red", value: 3}];

    $scope.droppedObjects1 = [];
    $scope.droppedObjects2 = [];
    $scope.centerAnchor = true;


    $scope.onDropComplete1 = function (data, evt, i, j) {
        var board = $scope.actualGame.board;
        board[i][j].id = data.id;
        board[i][j].value = data.value;
        board[i][j].color = data.color;
        
        var table = document.getElementById("table-board");
        var cell = table.rows[i].cells[j];
        cell.appendChild(evt.element[0]);

        var isCorrect = checkBoardGame(board);
        console.log("Is Board Game Correct? ----> " + isCorrect);
    }

    /* Check Board Game Algorithm */
    function checkBoardGame(boardgame) {
        var isBoardGameCorrect = true;
        var boardSets = [];
        for (var i = 0; i < 15; ++i) {
            for (var j = 0; j < 15; ++j) {
                // If there is a chip in actual position...
                if (boardgame[i][j].value != 0) {
                    var actualCell = {
                        "color" : boardgame[i][j].color,
                        "value" : boardgame[i][j].value
                    };
                    // Check all the row positions
                    var rowSet = [actualCell];
                    // ---->
                    for (var rowRight = j+1; rowRight < 15; ++rowRight) {
                        if (boardgame[i][rowRight].value == 0) { break; }
                        else {
                            var rightCell = {
                                "color" : boardgame[i][rowRight].color,
                                "value" : boardgame[i][rowRight].value
                            };
                            
                            var previousCell = rowSet[rowSet.length - 1];
                            // STRAIGHT OF SAME COLOR
                            if (previousCell.color == rightCell.color) {
                                if (rightCell.value == previousCell.value + 1) {
                                    rowSet.push(rightCell);
                                }
                            }
                        }
                    }
                    // <----
                    for (var rowLeft = j-1; rowLeft >= 0; --rowLeft) {
                        if (boardgame[i][rowLeft].value == 0) { break; }
                        else {
                            var leftCell = {
                                "color" : boardgame[i][rowLeft].color,
                                "value" : boardgame[i][rowLeft].value
                            }
                            var nextCell = rowSet[0];
                            // STRAIGHT OF SAME COLOR
                            if (nextCell.color == leftCell.color) {
                                if (leftCell.value == nextCell.value - 1) {
                                    rowSet.unshift(leftCell);
                                }
                            }
                        }
                    }
                    if (isSetCorrect(rowSet)) {
                        if (!containsSet(boardSets, rowSet)) {
                            boardSets.push(rowSet);
                        }
                    } else {
                        isBoardGameCorrect = false;
                    }
                    

                    // Check all the column positions
                    var columnSet = [actualCell];
                    // DOWN
                    for (var columnDown = i+1; columnDown < 15; ++columnDown) {
                        if (boardgame[columnDown][j].value == 0) { break; }
                    }
                    // UP
                    for (var columnUp = i-1; columnUp >= 0; --columnUp) {
                        if (boardgame[columnUp][j].value == 0) { break; }
                    }
                }
            }
        }
        console.log(boardSets);
        return isBoardGameCorrect;
    }

    function isSetCorrect(set) {
        var isCorrect = false;
        if (set.length >= 3) {
            isCorrect = true;
        }
        return isCorrect;
    }

    function containsSet(array, obj) {
        for (var i = 0; i < array.length; ++i) {
            if (array[i].length = obj.length) {
                for (var j = 0; j < array[i].length; ++j) {
                    if (arraysIdentical(array[i], obj)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    function arraysIdentical(a, b) {
        var i = a.length;
        if (i != b.length) return false;
            while (i--) {
                if ((a[i].color != b[i].color) || (a[i].value != b[i].value)) return false;
            }
        return true;
    };

    





    $scope.onDropComplete = function(data,evt) {
        var chipsDiv = document.getElementById("chips-div");
        chipsDiv.appendChild(evt.element[0]);
    }

    $scope.onDrag = function() {
        console.log("onDrag!");
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

    $scope.gameChat = function() {
        $scope.actualGame = angular.fromJson($stateParams.actualGame);
        $scope.actualGame = $scope.actualGame.actualGame;

        var actualGame = angular.toJson({ "actualGame": $scope.actualGame});
        $state.go('chat', { 'actualGame': actualGame });

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
