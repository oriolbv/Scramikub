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
                            [{value:"0"}, {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"},{value:"0"}, {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"}],
                            [{value:"0"}, {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"},{value:"0"}, {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"} , {value:"0"}, {value:"0"}],
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