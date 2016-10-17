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

    $scope.chips = [{number:"1", color:"red"},{number:"2", color:"blue"},{number:"3", color:"blue"}];

    var zoom, currentpos;
    $scope.stopIonicScroll = function(el) {
        // currentpos = {
        //     x: el.x,
        //     y: el.y
        // };
        // zoom = $ionicScrollDelegate.$getByHandle('plan').getScrollView().__zoomLevel;
        // $ionicScrollDelegate.$getByHandle('plan').getScrollView().options.scrollingY = false;
        // $ionicScrollDelegate.$getByHandle('plan').getScrollView().options.scrollingX = false;
        //$ionicScrollDelegate.$getByHandle('plan').freezeScroll(true);
        $ionicScrollDelegate.freezeScroll(true);
    };

    $scope.startIonicScroll = function() {
        // $ionicScrollDelegate.$getByHandle('plan').getScrollView().options.scrollingY = true;
        // $ionicScrollDelegate.$getByHandle('plan').getScrollView().options.scrollingX = true;
        $ionicScrollDelegate.freezeScroll(false);
    };

    $scope.dragging = function($event, element) {
        // element.x = currentpos.x + Math.round($event.gesture.deltaX / zoom);
        // element.y = currentpos.y + Math.round($event.gesture.deltaY / zoom);
    };

});