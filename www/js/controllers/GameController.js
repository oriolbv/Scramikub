angular.module('starter.controllers')

.controller('GameCtrl', function($scope, $state, $stateParams, $rootScope) {


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

});