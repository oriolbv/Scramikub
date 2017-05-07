angular.module('starter.controllers')

.controller('SettingsCtrl', function($scope, $state, $stateParams, $ionicPopup) {
    
	$scope.tutorial = function() {
		console.log("tutorial");
	}

	$scope.about = function() {
		console.log("about");
		$scope.data = {};

		// An elaborate, custom popup
		var myPopup = $ionicPopup.show({
			template: '<img src="img/title.png" style="width: 100% !important;"/> Oriol Burgaya',
			title: 'About',
			subTitle: '',
			buttons: [
				{ text: 'Ok' },
			]
		})
	}

});