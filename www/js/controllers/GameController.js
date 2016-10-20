angular.module('starter.controllers')

.controller('GameCtrl', function($scope, $state, $stateParams, $rootScope, $ionicScrollDelegate) {


    $scope.board = [
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
    ];

    // $scope.chips = [{number:"1", color:"red"},{number:"2", color:"blue"},{number:"3", color:"blue"}];

    $scope.draggableObjects = [{name:"1", color:"red"},{name:"2", color:"blue"},{name:"3", color:"blue"}];

    $scope.droppedObjects1 = [];
    $scope.droppedObjects2 = [];
    $scope.centerAnchor = true;


    $scope.onDropComplete1 = function (data, evt) {
        var index = $scope.droppedObjects1.indexOf(data);
        if (index == -1)
            $scope.droppedObjects1.push(data);
    }
    $scope.onDragSuccess1 = function (data, evt) {
        console.log("133", "$scope", "onDragSuccess1", "", evt);
        var index = $scope.droppedObjects1.indexOf(data);
        if (index > -1) {
            $scope.droppedObjects1.splice(index, 1);
        }
    }

    var inArray = function (array, obj) {
        var index = array.indexOf(obj);
    }

});
