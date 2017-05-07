angular.module('starter.controllers')

.controller('AnalyticsCtrl', function($scope, $state, $stateParams, Users) {
    $scope.ranking = [];
	$scope.users = Users;

	$scope.users.$loaded().then(function (user) {
        $scope.users = $scope.users[0];
		$scope.numPlayers = angular.fromJson($stateParams.numPlayers);
        console.log($scope.users);
		var array = $.map($scope.users, function(value, index) {
			if (value != null && value != "users") return [value];
		});
		var usersScore = [];
		for (var i = 0; i < array.length; ++i) {
			usersScore.push({
				"user" : array[i].displayName,
				"score" : array[i].gamesWon - array[i].gamesLost

			})
		}
		console.log(usersScore);
		usersScore.sort(function(a,b) {return (a.score < b.score) ? 1 : ((b.score < a.score) ? -1 : 0);} );
		// usersScore = usersScore.slice(0, 4);
		console.log(usersScore);
		$scope.ranking = usersScore;
    });
});