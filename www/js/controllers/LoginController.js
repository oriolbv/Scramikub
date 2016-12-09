angular.module('starter.controllers')

.controller('LoginCtrl', function($scope, $ionicScrollDelegate, $ionicModal, $state, $firebaseAuth, $ionicLoading, $rootScope, Auth) {
    
    $scope.delegateScroll;

    // $scope.dummyItems =  [   {chipId: "1b1", color: "blue", value: 1, row: "", column: "", imgLink: "img/1b.png"}, 
    //                 {chipId: "1b2", color: "blue", value: 2, row: "", column: "", imgLink: "img/2b.png"}, 
    //                 {chipId: "1b3", color: "blue", value: 3, row: "", column: "", imgLink: "img/3b.png"}, 
    //                 {chipId: "1b4", color: "blue", value: 4, row: "", column: "", imgLink: "img/4b.png"}, 
    //                 {chipId: "1b5", color: "blue", value: 5, row: "", column: "", imgLink: "img/5b.png"}, 
    //                 {chipId: "1b6", color: "blue", value: 6, row: "", column: "", imgLink: "img/6b.png"}, 
    //                 {chipId: "1b7", color: "blue", value: 7, row: "", column: "", imgLink: "img/7b.png"},  
    //                 {chipId: "1b8", color: "blue", value: 8, row: "", column: "", imgLink: "img/8b.png"},  
    //                 {chipId: "1b9", color: "blue", value: 9, row: "", column: "", imgLink: "img/9b.png"},  
    //                 {chipId: "1b10", color: "blue", value: 10, row: "", column: "", imgLink: "img/10b.png"},  
    //                 {chipId: "1b11", color: "blue", value: 11, row: "", column: "", imgLink: "img/11b.png"},
    //                 {chipId: "1b12", color: "blue", value: 12, row: "", column: "", imgLink: "img/12b.png"},  
    //                 {chipId: "1b13", color: "blue", value: 13, row: "", column: "", imgLink: "img/13b.png"},  
    //                 {chipId: "1b14", color: "blue", value: 14, row: "", column: "", imgLink: "img/14b.png"},  
    //                 {chipId: "1b15", color: "blue", value: 15, row: "", column: "", imgLink: "img/15b.png"} ];

    //     $scope.pager = {};
    //     $scope.setPage = setPage;

    //     initController();

    //     function initController() {
    //         // initialize to page 1
    //         $scope.setPage(1);
    //     }

    //     function setPage(page) {
    //         if (page < 1 || page > $scope.pager.totalPages) {
    //             return;
    //         }

    //         // get pager object from service
    //         $scope.pager = GetPager($scope.dummyItems.length, page);

    //         // get current page of items
    //         $scope.items = $scope.dummyItems.slice($scope.pager.startIndex, $scope.pager.endIndex + 1);
    //     }

    //     function GetPager(totalItems, currentPage, pageSize) {
    //         // default to first page
    //         currentPage = currentPage || 1;

    //         // default page size is 10
    //         pageSize = pageSize || 5;

    //         // calculate total pages
    //         var totalPages = Math.ceil(totalItems / pageSize);

    //         var startPage, endPage;
    //         if (totalPages <= 10) {
    //             // less than 10 total pages so show all
    //             startPage = 1;
    //             endPage = totalPages;
    //         } else {
    //             // more than 10 total pages so calculate start and end pages
    //             if (currentPage <= 6) {
    //                 startPage = 1;
    //                 endPage = 10;
    //             } else if (currentPage + 4 >= totalPages) {
    //                 startPage = totalPages - 9;
    //                 endPage = totalPages;
    //             } else {
    //                 startPage = currentPage - 5;
    //                 endPage = currentPage + 4;
    //             }
    //         }

    //         // calculate start and end item indexes
    //         var startIndex = (currentPage - 1) * pageSize;
    //         var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    //         // create an array of pages to ng-repeat in the pager control
    //         //var pages = _.range(startPage, endPage + 1);
    //         var pages = [1, 2, 3];

    //         // return object with all pager properties required by the view
    //         return {
    //             totalItems: totalItems,
    //             currentPage: currentPage,
    //             pageSize: pageSize,
    //             totalPages: totalPages,
    //             startPage: startPage,
    //             endPage: endPage,
    //             startIndex: startIndex,
    //             endIndex: endIndex,
    //             pages: pages
    //         };
    //     }

    // jQuery('#pagination-container').pagination({
    //     dataSource: $scope.datasource1,
    //     callback: function(data, pagination) {
    //         console.log("jquery bitches");
    //         // template method of yourself
    //         // var html = simpleTemplating(data);
    //         // $('#data-container').html(html);
    //     }
    // })

    // function simpleTemplating(data) {
    //     var html = '<ul>';
    //     $.each(data, function(index, item){
    //         html += '<li>'+ item +'</li>';
    //     });
    //     html += '</ul>';
    //     return html;
    // }
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