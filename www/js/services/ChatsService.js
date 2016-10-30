angular.module('starter.services')

.factory("Chats", function($firebaseArray) {
    var chatsRef = new Firebase(firebaseUrl + "/chats/");
    return $firebaseArray(chatsRef);
})