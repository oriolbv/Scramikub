angular.module('starter.controllers')

.controller('InitialPageCtrl', function($scope, $state, $stateParams, $rootScope, $ionicTabsDelegate) {
	// $scope.selectTabWithIndex = function(index) {
    // 	$ionicTabsDelegate.select(index);
  	// }
	$scope.doSomething = function($ionicTabsDelegate) {
		//console.log($ionicTabsDelegate.selectedIndex());
	}
});

