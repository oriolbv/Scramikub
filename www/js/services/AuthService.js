
angular.module('starter.services')

.factory("Auth", ["$firebaseAuth", "$rootScope",
    function ($firebaseAuth, $rootScope) {
            // var ref = new Firebase("https://scramikub.firebaseio.com/users/");
            var ref = new Firebase(firebaseUrl + "/users/");
            return $firebaseAuth(ref);
}]);