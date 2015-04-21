angular.module('starter.directives', [])

.directive('map', function() {
  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    link: function ($scope, $element, $attr)
	{
	  function initialize() 
	  {
        var mapOptions = 
		{
          center: new google.maps.LatLng(53.274209, -9.049152),
          zoom: 17,
          mapTypeId: google.maps.MapTypeId.ROADMAP		  
        };
        var map = new google.maps.Map($element[0], mapOptions);
		
		$scope.onCreate({map: map});		

        // Stop the side bar from dragging when mousedown/tapdown on the map
        google.maps.event.addDomListener($element[0], 'mousedown', function (e) 
		{		  
          e.preventDefault();
          return false;
        });
		
		google.maps.event.addListener(map, 'mousedown', function(event) 
		{
		  marker = new google.maps.Marker({
			position: new google.maps.LatLng(53.273696, -9.051447),
			message: 'You have created a marker here',
			draggable: false,
			map: map
		  });
		  
		  marker = new google.maps.Marker({
			position: new google.maps.LatLng(53.272936, -9.052209),
			message: 'You have created a marker here',
			draggable: false,
			map: map
		  });
		});
      }

      if (document.readyState === "complete") {
        initialize();
      } else {
        google.maps.event.addDomListener(window, 'load', initialize);
      }
    }
  }
})

.directive('map2', function() {
  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    link: function ($scope, $element, $attr)
	{
	  function initialize() 
	  {
        var mapOptions = 
		{
          center: new google.maps.LatLng(53.273696, -9.051447),
          zoom: 17,
          mapTypeId: google.maps.MapTypeId.ROADMAP
		  
        };
        var map = new google.maps.Map($element[0], mapOptions);
		
		$scope.onCreate({map: map2});

        // Stop the side bar from dragging when mousedown/tapdown on the map
        google.maps.event.addDomListener($element[0], 'mousedown', function (e) 
		{		  
          e.preventDefault();
          return false;
        });
		
      }

      if (document.readyState === "complete") {
        initialize();
      } else {
        google.maps.event.addDomListener(window, 'load', initialize);
      }
    }
  }
});