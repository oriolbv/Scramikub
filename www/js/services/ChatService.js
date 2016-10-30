angular.module('starter.services')

.factory("Chat", function($firebaseArray) {
    var refChat = new Firebase(firebaseUrl + "/chats/");
    return refChat;
})