angular.module('starter.services')

// .factory("Games", ["$firebaseAuth", "$rootScope",
//     function ($firebaseAuth, $rootScope) {
//             // var ref = new Firebase("https://scramikub.firebaseio.com/users/");
//             var ref = new Firebase(firebaseUrl + "/games/");
//             return $firebaseAuth(ref);
// }]);

.factory("Games", function($firebaseArray) {
    var gamesRef = new Firebase(firebaseUrl + "/games/");
    return $firebaseArray(gamesRef);
})