angular.module('starter.controllers')

.controller('GameCtrl', function($scope, $state, $stateParams, $rootScope, $ionicScrollDelegate, Games, $ionicPopup) {

    var isBoardGameCorrect = true;
    $scope.userConnected = userConnected.auth.token;

    $scope.games = Games;

    $scope.onDragStart = function($data, $event, $ionicScrollDelegate) {
        console.log("hola");
        
    }

    $scope.elem = [];

    $scope.board = [];
    $scope.correctBoardSets = [];

    $scope.actualGame = {};

    // $scope.chips = [{number:"1", color:"red"},{number:"2", color:"blue"},{number:"3", color:"blue"}];

    //$scope.draggableObjects = [{chipId: "1r1", color: "red", value: 1, row: "", column: "", imgLink: "img/1r.png"}, {chipId:"1r2" ,color: "red", value: 2, row: "", column: "", imgLink: "img/2r.png"}, {chipId:"1r3" ,color: "red", value: 3, row: "", column: "", imgLink: "img/3r.png"}, {chipId:"1r4" ,color: "red", value: 4, row: "", column: "", imgLink: "img/4r.png"}, {chipId:"1r5" ,color: "red", value: 5, row: "", column: "", imgLink: "img/5r.png"}];

    $scope.draggableObjects = [];


    $scope.onDropComplete1 = function (data, evt, i, j) {

        if ((data.row == "") && (data.column == "")) {
            
        } else {
            $scope.actualGame.board[data.row][data.column].chipId = "";
            $scope.actualGame.board[data.row][data.column].value = "";
            $scope.actualGame.board[data.row][data.column].color = "";
        }

        var board = $scope.actualGame.board;
        board[i][j].chipId = data.chipId;
        board[i][j].value = data.value;
        board[i][j].color = data.color;
        board[i][j].imgLink = data.imgLink;
        board[i][j].row = i;
        board[i][j].column = j;
        //board[i][j].elem = evt.element;
        $scope.elem = evt.element;

        data.row = i;
        data.column = j;

        var numberOfChips = $scope.actualGame.playersChips[$scope.actualGame.userTurn].length;
        for (var pos = 0; pos < numberOfChips; ++pos) {
            if ($scope.actualGame.playersChips[$scope.actualGame.userTurn][pos].chipId == data.chipId) {
                $scope.actualGame.playersChips[$scope.actualGame.userTurn].splice(pos, 1);
                break;
            }
        }
        

       
        
        var table = document.getElementById("table-board");
        var cell = table.rows[i].cells[j];

        angular.element(cell).removeClass("square").addClass("square-done");

        cell.appendChild(evt.element[0]);

        isBoardGameCorrect = checkBoardGame(board);
        console.log("Is Board Game Correct? ----> " + isBoardGameCorrect);
    }

    /* Check Board Game Algorithm */
    function checkBoardGame(boardgame) {
        var isCorrect = true;
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
                        if (rowSet.length > 1) {
                            isCorrect = false;
                        }
                    }
                    

                    // Check all the column positions
                    var columnSet = [actualCell];
                    // DOWN
                    for (var columnDown = i+1; columnDown < 15; ++columnDown) {
                        if (boardgame[columnDown][j].value == 0) { break; }
                        else {
                            var downCell = {
                                "color" : boardgame[columnDown][j].color,
                                "value" : boardgame[columnDown][j].value
                            };
                            
                            var previousCell = columnSet[columnSet.length - 1];
                            // STRAIGHT OF SAME COLOR
                            if (previousCell.color == downCell.color) {
                                if (downCell.value == previousCell.value + 1) {
                                    columnSet.push(downCell);
                                }
                            }
                        }
                    }
                    // UP
                    for (var columnUp = i-1; columnUp >= 0; --columnUp) {
                        if (boardgame[columnUp][j].value == 0) { break; }
                        else {
                            var upCell = {
                                "color" : boardgame[columnUp][j].color,
                                "value" : boardgame[columnUp][j].value
                            }
                            var nextCell = columnSet[0];
                            // STRAIGHT OF SAME COLOR
                            if (nextCell.color == upCell.color) {
                                if (upCell.value == nextCell.value - 1) {
                                    columnSet.unshift(upCell);
                                }
                            }
                        }
                    }

                    if (isSetCorrect(columnSet)) {
                        if (!containsSet(boardSets, columnSet)) {
                            boardSets.push(columnSet);
                        }
                    } else {
                        if (columnSet.length > 1) {
                            isCorrect = false;
                        }                   
                    }
                }
            }
        }

        console.log(boardSets);
        if (boardSets.length > 0) {
            $scope.correctBoardSets = boardSets;
        }
        return isCorrect;
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
        
        $scope.draggableObjects = $scope.actualGame.playersChips[$scope.actualGame.userTurn];

        $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
            console.log("ngRepeatFinished");
            for (var i = 0; i < $scope.board.length; ++i) {
                for (var j = 0; j < $scope.board[0].length; ++j) {
                    if ($scope.board[i][j].chipId != "") {
                        insertChipToCell($scope.board[i][j])
                    }
                }
            }
        });
    });

    function insertChipToCell(boardCell) {
        var table = document.getElementById("table-board");
        var cell = table.rows[boardCell.row].cells[boardCell.column];

        angular.element(cell).removeClass("square").addClass("square-done");
        var element = document.createElement('div');

        // if we want to clone
        // var div = document.getElementById("chips-div").childNodes[1].childNodes[2].childNodes[1];
        // var clone = div.cloneNode(true); // true means clone all childNodes and all event handlers
        // clone.id = boardCell.chipId;
        // cell.appendChild(clone);

        
        element.setAttribute("class","square-chip disable-user-behavior");
        angular.element(element).addClass("square-chip disable-user-behavior");
        angular.element(element).addClass("gas");
        element.setAttribute("ng-drag", "true");
        element.setAttribute("ng-drag-data", "obj");
        element.setAttribute("data-allow-transform", "false");
        element.setAttribute("on-drag", "onDrag()");
        element.setAttribute("ng-drag-scroll", "");
        element.setAttribute("horizontalScroll", "false");
        element.setAttribute("verticalScroll", "false");
        element.setAttribute("draggable", "false");

        var img = document.createElement('img');
        img.setAttribute("ng-src", boardCell.imgLink);
        img.setAttribute("src", boardCell.imgLink);
        img.setAttribute("height", "100%");
        img.setAttribute("width", "100%");
        element.appendChild(img);

        cell.appendChild(element);
       
    }

    $scope.playMove = function(){
        if (isBoardGameCorrect) {
            if ($scope.draggableObjects.length == 0) {
                var alertPopup = $ionicPopup.alert({
                    title: 'You have won this game!',
                    template: 'It might taste good'
                });

                alertPopup.then(function(res) {
                    saveActualGameWithWinner()
                });
            } else {
                saveActualGame()
            }
        }   
    };

    


    function saveActualGame() {
        $scope.games.$loaded().then(function (games) {
            // We need the position in players array of the actual player
            //var element = $scope.actualGame.elem;
            $scope.actualGame = angular.copy($scope.actualGame);
            var userTurnPos = 0;
            for (var i = 0; i < $scope.actualGame.players.length; ++i) {
                if ($scope.actualGame.userTurn == i) {
                    // If userTurn is the last of the list ...
                    if (i == $scope.actualGame.players.length-1) {
                        userTurnPos = 0;
                    } else {
                        userTurnPos = i + 1;
                    }
                }
            }

            // Normalize board
            $scope.actualGame.board = $scope.board;
            $scope.actualGame = angular.copy($scope.actualGame);
            games.$ref().child($scope.actualGame.$id).set({
                "name": $scope.actualGame.name,
                "players": $scope.actualGame.players,
                "userTurn": userTurnPos,
                "gameState": $scope.actualGame.gameState,
                "board": $scope.actualGame.board,
                "playersChips": [$scope.actualGame.playersChips[0], $scope.actualGame.playersChips[1]],
                "winner": "",
                "element": $scope.elem
            });
            $state.go('lobby');
        });
    }

    function saveActualGameWithWinner() {
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
                "board": $scope.actualGame.board,
                "playersChips": [$scope.actualGame.playersChips[0], $scope.actualGame.playersChips[1]],
                "winner": $scope.userConnected.email
            });
            $state.go('lobby');
        });
    }

    $scope.passMove = function() {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Consume Ice Cream',
            template: 'Are you sure you want to eat this ice cream?'
        });

        confirmPopup.then(function(res) {
            if(res) {
            console.log('You are sure');
            } else {
            console.log('You are not sure');
            }
        });
    };
});
