// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers', 'starter.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: "/home",
    views: {
      'menuContent': {
        templateUrl: "templates/home.html",
		controller: 'MapCtrl'
      }
    }
  })

  .state('app.directions',{
	url: "/directions",
	views: {
      'menuContent': {
        templateUrl: 'templates/directions',
		controller: 'Geofence'
      }
    },
	resolve: {
		geofence: function ($stateParms, geofenceService, $q)
		{
			var geofence = geofenceService.findById($stateParams.geofenceID);
			if(geofence)
			{
				return $q.when(geofence);
			}
			return $q.reject('Cannot find geofence with id: ' + $stateParms.geofenceID);
		}
	}
  })

  .state('app.createAc',{
	url: "/createAc",
	templateUrl: 'templates/createAc'
  })

  .state('app.categories', {
    url: "/categories",
    views: {
      'menuContent': {
        templateUrl: "templates/categories.html"
      }
    }
  })
    .state('app.settings', {
      url: "/settings",
      views: {
        'menuContent': {
          templateUrl: "templates/settings.html"
        }
      }
    })

  .state('app.about', {
    url: "/about",
    views: {
      'menuContent': {
        templateUrl: "templates/about.html"
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
})

.controller("shareCntr", function($scope, $cordovaSocialSharing)
{
  $sscope.shareAnywhere = function()
  {
    //(message, title, image, url)
    $cordovaSocialSharing.share("This is the message","This is the title", null, "https://blog.nraboy")
  }
});
