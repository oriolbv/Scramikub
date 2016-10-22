angular.module('starter.services')

.factory("Game"), function($firebaseArray) {
    var refGame = new Firebase("https://scramikub.firebaseio.com/games/");
    return refGame;
}