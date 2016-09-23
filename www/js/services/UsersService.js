angular.module('starter.services')

.factory("Users", function($firebaseArray) {
    var usersRef = new Firebase(firebaseUrl + "/users/");
    return $firebaseArray(usersRef);
})