angular.module('starter.controllers')

.controller('LoginCtrl', function($scope, $ionicScrollDelegate, $ionicModal, $state, $firebaseAuth, $firebaseArray, $ionicLoading, $rootScope, Auth) {
    
    $scope.delegateScroll;

    $scope.dummyItems =  [   {chipId: "1b1", color: "blue", value: 1, row: "", column: "", imgLink: "img/1b.png"}, 
                    {chipId: "1b2", color: "blue", value: 2, row: "", column: "", imgLink: "img/2b.png"}, 
                    {chipId: "1b3", color: "blue", value: 3, row: "", column: "", imgLink: "img/3b.png"}, 
                    {chipId: "1b4", color: "blue", value: 4, row: "", column: "", imgLink: "img/4b.png"}, 
                    {chipId: "1b5", color: "blue", value: 5, row: "", column: "", imgLink: "img/5b.png"}, 
                    {chipId: "1b6", color: "blue", value: 6, row: "", column: "", imgLink: "img/6b.png"}, 
                    {chipId: "1b7", color: "blue", value: 7, row: "", column: "", imgLink: "img/7b.png"},  
                    {chipId: "1b8", color: "blue", value: 8, row: "", column: "", imgLink: "img/8b.png"},  
                    {chipId: "1b9", color: "blue", value: 9, row: "", column: "", imgLink: "img/9b.png"},  
                    {chipId: "1b10", color: "blue", value: 10, row: "", column: "", imgLink: "img/10b.png"},  
                    {chipId: "1b11", color: "blue", value: 11, row: "", column: "", imgLink: "img/11b.png"},
                    {chipId: "1b12", color: "blue", value: 12, row: "", column: "", imgLink: "img/12b.png"},  
                    {chipId: "1b13", color: "blue", value: 13, row: "", column: "", imgLink: "img/13b.png"},  
                    {chipId: "1b14", color: "blue", value: 14, row: "", column: "", imgLink: "img/14b.png"},  
                    {chipId: "1b15", color: "blue", value: 15, row: "", column: "", imgLink: "img/15b.png"} ];

    $scope.onDropComplete1 = function($data,$event,i,j) {
        console.log("hola");
    }


    $scope.onDrag = function($data,$event) {
        console.log("onDrag");
        delete $event.currentTarget;
    }

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
                    displayName: user.displayname,
                    gamesWon: 0,
                    gamesLost: 0
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
                        userInfo = val;
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