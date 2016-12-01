angular.module('starter.controllers')

.controller('LoginCtrl', function($scope, $ionicScrollDelegate, $ionicModal, $state, $firebaseAuth, $ionicLoading, $rootScope, Auth) {
    
    $scope.delegateScroll;

    setTimeout(function() {
                $scope.delegateScroll = $ionicScrollDelegate.$getByHandle('myScroll');

                // rest of related code included here...

            },10);


    $scope.onDragStart = function($data, $event, $ionicScrollDelegate) {
        console.log("hola");
        setTimeout(function() {
                //$scope.delegateScroll = $ionicScrollDelegate.$getByHandle('myScroll');

                 $scope.delegateScroll.freezeScroll(true);

            },10);
       
        
    }

    $scope.droppedObjects1 = [];
    $scope.droppedObjects2 = [];
    $scope.centerAnchor = true;


    $scope.onDropComplete1 = function (data, evt) {
        var index = $scope.droppedObjects1.indexOf(data);
        if (index == -1)
            $scope.droppedObjects1.push(data);
    }
    $scope.onDragSuccess1 = function (data, evt) {
        console.log("133", "$scope", "onDragSuccess1", "", evt);
        var index = $scope.droppedObjects1.indexOf(data);
        if (index > -1) {
            $scope.droppedObjects1.splice(index, 1);
        }
    }



    //var ref = new Firebase($scope.firebaseUrl);
    var ref = new Firebase("https://scramikub.firebaseio.com/users/");
    var auth = $firebaseAuth(ref);
    
    $scope.auth = Auth;

    $ionicModal.fromTemplateUrl('templates/signup.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });

    $scope.createUser = function (user) {
        console.log("Create User Function called");
        if (user && user.email && user.password && user.displayname) {
            $ionicLoading.show({
                template: 'Signing Up...'
            });

            auth.$createUser({
                email: user.email,
                password: user.password
            }).then(function (userData) {
                alert("User created successfully!");
                ref.child("users").child(userData.uid).set({
                    email: user.email,
                    displayName: user.displayname
                });
                $ionicLoading.hide();
                $scope.modal.hide();
            }).catch(function (error) {
                alert("Error: " + error);
                $ionicLoading.hide();
            });
        } else
            alert("Please fill all details");
    }

   

    $scope.login = function(user) {
    
        if (user && user.email && user.password) {
            $ionicLoading.show({
                template: 'Signing In...'
            });
            auth.$authWithPassword({
                email: user.email,
                password: user.password
            }).then(function (authData) {
                console.log("Logged in as:" + authData.uid);
                ref.child("users").child(authData.uid).once('value', function (snapshot) {
                    var val = snapshot.val();
                    // To Update AngularJS $scope either use $apply or $timeout
                    $scope.$apply(function () {
                        $rootScope.displayName = val;
                    });
                });
                $ionicLoading.hide();
                userConnected = authData;
                $state.go('initial');
            }).catch(function (error) {
                alert("Authentication failed:" + error.message);
                $ionicLoading.hide();
            });
        } else {
            alert("Please enter email and password both");
        }       
    };

    $scope.draggableObjects = [{name:"1", color:"red"},{name:"2", color:"blue"}];

    $scope.droppedObjects1 = [];
    $scope.droppedObjects2 = [];
    $scope.centerAnchor = true;


    $scope.onDropComplete1 = function (data, evt) {
        var index = $scope.droppedObjects1.indexOf(data);
        if (index == -1)
            $scope.droppedObjects1.push(data);
    }
    $scope.onDragComplete = function (data, evt) {
        console.log("133", "$scope", "onDragSuccess1", "", evt);
        var index = $scope.droppedObjects1.indexOf(data);
        if (index > -1) {
            $scope.droppedObjects1.splice(index, 1);
        }
    }

    var inArray = function (array, obj) {
        var index = array.indexOf(obj);
    }
});