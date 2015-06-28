angular.module('starter.controllers',['ui.bootstrap'])

.controller('CollapseCtrl', function ($scope) {
  $scope.isCollapsed = true;
})

    //.controller('linkCtrl', function ($scope, params ) {
    //  $scope.changeLink = document.getElementById("test2").href="www.google.com";
    //})






.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  //
  //// Form data for the login modal


})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('HomeCtrl', function($scope) {
      console.log("hello2");
  $scope.cards = [
    { title: 'Bristol Freshers', avatarImg:"events/CCL.png" , coverImg:"events/4.png", description:"First event of term!", location: "Embargos, Bristol", venue:"The Fleece", date: "Sunday 27th September", day:"Sunday", id: 1, coverURL: "https://www.facebook.com/events/971419459536809/", avatarURL: "https://www.facebook.com/groups/521020464709928/?fref=ts"},
    { title: 'Bristol Freshers', avatarImg:"events/CCL.png" , coverImg:"events/4.png", description:"First event of term!", location: "Frogmore Street, BS1 5NA", venue:"The Fleece", date: "Sunday 27th September", day:"Saturday", id: 1 },
  ];
      //Device selection for Maps integration.
      $scope.changeLink = function (location){
        var devicePlatform = device.platform;
        var mapRoot = location + ", UK";
        console.log(devicePlatform);
        if(devicePlatform == "iOS1"){
          mapRoot = "maps:q=" + mapRoot;
        }
        else if (devicePlatform == 'Android'){
          mapRoot = "geo:0,0?q=" + mapRoot
        }
        else {
          mapRoot = "https://www.google.co.uk/maps/search/" + mapRoot
        }
        document.getElementById("maps").href = window.open(mapRoot, '_system');
        document.getElementById("maps2").href = window.open(mapRoot, '_system');
        return false;
    };

      $scope.isCollapsed = true;

      //Add to config.xml for appAvailability plugin ->>> <gap:plugin name="com.ohh2ahh.plugins.appavailability" />

      $scope.checkApp = function(URL, id){
        //var scheme  = 'fb://';
        //appAvailability.check(scheme,       // URI Scheme or Package Name
        //    function() {  // Success callback - application installed
        //      document.getElementById(id.toString()).href = "fb://" + URLNative;
        //    },
        //    function() {  // Error callback
        //      document.getElementById(id.toString()).href = URL;
        //    })

        document.getElementById(id.toString()).href = window.open(URL, '_system');
        return false;
      };
})


.controller('PlaylistCtrl', function($scope, $stateParams) {
});


