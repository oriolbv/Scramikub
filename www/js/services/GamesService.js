angular.module('starter.services')

.factory("Games", function($firebaseArray) {
    var gamesRef = new Firebase(firebaseUrl + "/games/");
    return $firebaseArray(gamesRef);
})
