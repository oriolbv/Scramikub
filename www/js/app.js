// Ionic Starter App

var firebaseUrl = "https://scramikub.firebaseio.com";
var userConnected = null;

angular.module('starter', ['ionic', 'firebase', 'starter.controllers', 'starter.services', 'ngDraggable', 'chart.js'])

.config(function($stateProvider, $urlRouterProvider) {

  	$stateProvider
			.state('login', {
				url: '/',
				cache: false,
				templateUrl: 'templates/login.html',
				controller: 'LoginCtrl',
				// controllerAs: 'vm'
			})
			.state('initial', {
				url: '/initial',
				cache: false,
				templateUrl: 'templates/initial-page.html',
				controller: 'InitialPageCtrl',
				// controllerAs: 'vm'

			})
			.state('initial.lobby', {
				url: '/lobby',
				views: {
					'lobby-tab': {
						cache: false,
						templateUrl: 'templates/lobby.html',
						controller: 'LobbyCtrl'
					}
				}
			})
			.state('initial.settings', {
				url: '/settings',
				views: {
					'settings-tab': {
						cache: false,
						templateUrl: 'templates/settings.html',
						controller: 'SettingsCtrl'
					}
				}
			})
			.state('initial.analytics', {
				url: '/analytics',
				views: {
					'analytics-tab': {
						cache: false,
						templateUrl: 'templates/analytics.html',
						controller: 'AnalyticsCtrl'
					}
				}
			})
			.state('initial.user', {
				url: '/user',
				views: {
					'user-tab': {
						cache: false,
						templateUrl: 'templates/user.html',
						controller: 'UserCtrl'
					}
				}
			})

			.state('create-game', {
				url: '/create-game?players?name?numPlayers',
				cache: false,
				templateUrl: 'templates/create-game.html',
				controller: 'CreateGameCtrl',
				// controllerAs: 'vm'
			})
			.state('select-players', {
				url: '/select-players?numPlayers?name',
				cache: false,
				templateUrl: 'templates/select-players.html',
				controller: 'SelectPlayersCtrl',
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

.directive('onFinishRender', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit(attr.onFinishRender);
                });
            }
        }
    }
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
				StatusBar.hide();
		}
		// StatusBar.hide();
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
