angular.module('starter.controllers')

.controller('InitialPageCtrl', function($scope, $ionicTabsDelegate, $timeout) {
	$timeout(function(){
    	$ionicTabsDelegate.select(1);
  	},0);
});

