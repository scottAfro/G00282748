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
			position: new google.maps.LatLng(53.274208, -9.050672),
			message: 'You have created a marker here',
			draggable: false,
			map: map
		  });
		  
		  marker = new google.maps.Marker({
			position: new google.maps.LatLng(53.274207, -9.051102),
			message: 'You have created a marker here',
			draggable: false,
			map: map
		  });
		  
		  marker = new google.maps.Marker({
			position: new google.maps.LatLng(53.274042, -9.051273),
			message: 'You have created a marker here',
			draggable: false,
			map: map
		  });
		  
		  marker = new google.maps.Marker({
			position: new google.maps.LatLng(53.274006, -9.051108),
			message: 'You have created a marker here',
			draggable: false,
			map: map
		  });
		  
		  marker = new google.maps.Marker({
			position: new google.maps.LatLng(53.274004, -9.051646),
			message: 'You have created a marker here',
			draggable: false,
			map: map
		  });
		  
		  marker = new google.maps.Marker({
			position: new google.maps.LatLng(53.273874, -9.051302),
			message: 'You have created a marker here',
			draggable: false,
			map: map
		  });
		  
		  marker = new google.maps.Marker({
			position: new google.maps.LatLng(53.273791, -9.051540),
			message: 'You have created a marker here',
			draggable: false,
			map: map
		  });
		  
		  marker = new google.maps.Marker({
			position: new google.maps.LatLng(53.273053, -9.052331),
			message: 'You have created a marker here',
			draggable: false,
			map: map
		  });
		  
		  marker = new google.maps.Marker({
			position: new google.maps.LatLng(53.052331, -9.052170),
			message: 'You have created a marker here',
			draggable: false,
			map: map
		  });
		  
		  marker = new google.maps.Marker({
			position: new google.maps.LatLng(53.172997, -9.052243),
			message: 'You have created a marker here',
			draggable: false,
			map: map
		  });
		  
		  marker = new google.maps.Marker({
			position: new google.maps.LatLng(53.272946, -9.052319),
			message: 'You have created a marker here',
			draggable: false,
			map: map
		  });
		  
		  marker = new google.maps.Marker({
			position: new google.maps.LatLng(53.272946, -9.052334),
			message: 'You have created a marker here',
			draggable: false,
			map: map
		  });
		  
		  marker = new google.maps.Marker({
			position: new google.maps.LatLng(53.272970, -9.052549),
			message: 'You have created a marker here',
			draggable: false,
			map: map
		  });
		  
		  marker = new google.maps.Marker({
			position: new google.maps.LatLng(53.272864, -9.052625),
			message: 'You have created a marker here',
			draggable: false,
			map: map
		  });
		  
		  marker = new google.maps.Marker({
			position: new google.maps.LatLng(53.272742, -9.052664),
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