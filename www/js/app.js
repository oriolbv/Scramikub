// Ionic Starter App

var firebaseUrl = "https://scramikub.firebaseio.com";
var userConnected = null;

angular.module('starter', ['ionic', 'firebase', 'starter.controllers', 'starter.services', 'ngDraggable'])

.config(function($stateProvider, $urlRouterProvider) {

  	$stateProvider
			.state('login', {
				url: '/',
				cache: false,
				templateUrl: 'templates/login.html',
				controller: 'LoginCtrl',
				// controllerAs: 'vm'
			})
			.state('lobby', {
				url: '/lobby',
				cache: false,
				templateUrl: 'templates/lobby.html',
				controller: 'LobbyCtrl',
				// controllerAs: 'vm'

			})
			.state('create-game', {
				url: '/create-game',
				cache: false,
				templateUrl: 'templates/create-game.html',
				controller: 'CreateGameCtrl',
				// controllerAs: 'vm'
			})
			.state('game', {
				url: '/game?actualGame',
				cache: false,
				templateUrl: 'templates/game.html',
				controller: 'GameCtrl'

			})
			.state('chat', {
				url: '/chat?actualGame',
				cache: false,
				templateUrl: 'templates/chat.html',
				controller: 'ChatCtrl'
			});


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');
})
.run(function($rootScope, $state, $ionicPlatform) {
	$ionicPlatform.ready(function() {
		// window.AndroidFullScreen.immersiveMode(successFunction, errorFunction);

		// function successFunction() {
		// 	console.log("It worked!");
		// }

		// function errorFunction(error) {
		// 	console.log(error);
		// }

		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				cordova.plugins.Keyboard.disableScroll(true);

		}
		if (window.StatusBar) {
				// org.apache.cordova.statusbar required
				StatusBar.styleDefault();
		}
		
		// To Resolve Bug
		ionic.Platform.fullScreen();

		$rootScope.firebaseUrl = firebaseUrl;
		$rootScope.displayName = null;

		// Auth.$onAuth(function (authData) {
		//     if (authData) {
		//         console.log("Logged in as:", authData.uid);
		//     } else {
		//         console.log("Logged out");
		//         $ionicLoading.hide();
		//         $location.path('/login');
		//     }
		// });

		$rootScope.logout = function () {
			console.log("Logging out from the app");
			$ionicLoading.show({
				template: 'Logging Out...'
			});
			Auth.$unauth();
		}


		$rootScope.$on("$stateChangeError", function (event, toState, toParams, fromState, fromParams, error) {
			// We can catch the error thrown when the $requireAuth promise is rejected
			// and redirect the user back to the home page
			if (error === "AUTH_REQUIRED") {
				$location.path("/login");
			}
		});
	});
})
