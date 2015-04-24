var cntr = angular.module('starter.controllers', [])

cntr.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
});

cntr.controller('MapCtrl', function($scope, $ionicLoading) {
  $scope.mapCreated = function(map) {
    $scope.map = map;
  };

  $scope.centerOnMe = function () {
    console.log("Centring");
    if (!$scope.map) {
      return;
    }

    $scope.loading = $ionicLoading.show({
      content: 'Getting current location...',
      showBackdrop: true
    });

    navigator.geolocation.getCurrentPosition(function (pos)
    {
      console.log('Got pos', pos);
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      $scope.loading.hide();
      marker = new google.maps.Marker({
			position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
			message: 'You have created a marker here',
			draggable: false,
			map: map
		  });
    }, function (error)
    {
      alert('Unable to get location: ' + error.message);
    });
  };
});

cntr.controller('mongoCntr',function($scope, $stateParams, $http)
{
	$http.get('/contactList').success(function(response)
	{
		console.log("I got the data requested");
		$scope.contactList = response;
		$scope.contact = "";
	});
});

cntr.controller('feedController', function($http, $scope)
{
	$scope.init = function()
	{
		$http.get("http://ajax.googleapis.com/ajax/services/feed/load",{
			params: {
				"v": "1.0",
				"q" : "http://blog.nraboy.com/feed/",
				"num" : "10"
			}
		})
		.success(function(data)
		{
			$scope.rssTitle = data.responseData.feed.title;
			$scope.rssUrl = data.responseData.feed.feedUrl;
			$scope.ressSiteUrl = data.responseData.feed.link;
			$scope.entries = data.responseData.feed.entries;
			window.localStroage["entries"] = JSON.stringify(data.responseData.feed.entries);
		})
		.error(function(data)
		{
			console.log("ERROR: " + data);
			if(window.localStorage["entries"] !== undefined)
			{
				$scope.entries = JSON.parse(window.localStorage["entries"]);
			}
		});
	}

	$scope.browse = function(v)
	{
		window.open(v, "_system", "location=yes");
	}
});

cntr.controller("shareCntr", function($scope, $cordovaSocialSharing)
{
  $scope.shareAnywhere = function()
  {
    //(message, title, image, url)
    $cordovaSocialSharing.share("Check out the great app Here: ","AdvertToYou", null, "https://www.facebook.com/Adverttoyou")
  }
});
