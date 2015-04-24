angular.module('starter.directives', [])

.directive('map', function() {
  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    link: function ($scope, $element, $attr, $compile)
	{
	  function initialize()
	  {
      var eyreS = new google.maps.LatLng(53.274209, -9.049152);
      var gbc = new google.maps.LatLng(53.274208, -9.050672);
      var fJewl = new google.maps.LatLng(53.274207, -9.051102);
      var max = new google.maps.LatLng(53.274042, -9.051273);
      var mon = new google.maps.LatLng(53.274006, -9.051108);
      var bt = new google.maps.LatLng(53.274004, -9.051646);
      var fl = new google.maps.LatLng(53.273874, -9.051302);
      var mfc = new google.maps.LatLng(53.273791, -9.051540);
      var mcC = new google.maps.LatLng(53.273053, -9.052331);
      var ls = new google.maps.LatLng(53.273046, -9.052170);
      var dub = new google.maps.LatLng(53.172997, -9.052243);
      var lyn = new google.maps.LatLng(53.272946, -9.052319);
      var omg = new google.maps.LatLng(53.272946, -9.052334);
      var mcD = new google.maps.LatLng(53.272970, -9.052549);
      var boot = new google.maps.LatLng(53.272864, -9.052625);
      var ella = new google.maps.LatLng(53.272742, -9.052664);
      var tom = new google.maps.LatLng(53.272723, -9.052610);
      var eas = new google.maps.LatLng(53.272695, -9.052905);
      var ar = new google.maps.LatLng(53.272598, -9.052982);
      var tc = new google.maps.LatLng(53.273563, -9.051341);
      var fs = new google.maps.LatLng(53.273975, -9.050957);

      var mapOptions =
	    {
        center: eyreS,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map($element[0], mapOptions);

      var eyreMark = new google.maps.Marker(
      {
        position: eyreS,
        map: map,
        title: 'Eyre Square(*)'
      });

      var gbcMark = new google.maps.Marker(
      {
        position: gbc,
        map: map,
        title: 'GBC Restaurant'
      });

      var fJewlMark = new google.maps.Marker(
      {
        position: fJewl,
        map: map,
        title: 'Fallers Jewellers'
      });

      var maxMark = new google.maps.Marker(
      {
        position: max,
        map: map,
        title: 'Tk Maxx'
      });

      var monMark = new google.maps.Marker(
      {
        position: mon,
        map: map,
        title: 'Monsoon'
      });

      var btMark = new google.maps.Marker(
      {
        position: bt,
        map: map,
        title: 'Brown Thomas'
      });

      var flMark = new google.maps.Marker(
      {
        position: fl,
        map: map,
        title: 'Foot Looker'
      });

      var mfcMark = new google.maps.Marker(
      {
        position: mfc,
        map: map,
        title: 'Matt O Flattery'
      });

      var mcCMark = new google.maps.Marker(
      {
        position: mcC,
        map: map,
        title: 'Mc Cambridges'
      });

      var lsMark = new google.maps.Marker(
      {
        position: ls,
        map: map,
        title: 'Lifestyle Sport'
      });

      var dubMark = new google.maps.Marker(
      {
        position: dub,
        map: map,
        title: 'Dubary Book Store'
      });

      var lynMark = new google.maps.Marker(
      {
        position: lyn,
        map: map,
        title: 'Lynchs Restaurant'
      });

      var omgMark = new google.maps.Marker(
      {
        position: omg,
        map: map,
        title: 'OMG @ Zhivago'
      });

      var mcDMark = new google.maps.Marker(
      {
        position: mcD,
        map: map,
        title: 'Mc Donalds'
      });

      var bootMark = new google.maps.Marker(
      {
        position: boot,
        map: map,
        title: 'Boots'
      });

      var ellaMark = new google.maps.Marker(
      {
        position: ella,
        map: map,
        title: 'Elles Cafe'
      });

      var tomMark = new google.maps.Marker(
      {
        position: tom,
        map: map,
        title: 'Tommy Hilfigure'
      });

      var easMark = new google.maps.Marker(
      {
        position: eas,
        map: map,
        title: 'Easons Book Store'
      });

      var arMark = new google.maps.Marker(
      {
        position: ar,
        map: map,
        title: 'Anthony Ryan'
      });

      //Marker Info
      var eyreInfo = new google.maps.InfoWindow({
        content:'Start Point'
      });
      eyreInfo.open(map, eyreMark);

      var gbcInfo = new google.maps.InfoWindow({
        content:'GBC Restaurant: Lunches from €6'
      });
      gbcInfo.open(map, gbcMark);

      var fJewlInfo = new google.maps.InfoWindow({
        content:'Fallers Jewellers: 10% off'
      });
      fJewlInfo.open(map, fJewlMark);

    google.maps.event.addListener(gbcMark, 'click', function()
    {
      gbcInfo.open(map, gbcMark);
    });

    google.maps.event.addListener(fJewlMark, 'click', function()
    {
      fJewlInfo.open(map, fJewlMark);
    });

    $scope.onCreate({map: map});

    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();

     var request =
     {
         origin : eyreS,
         destination : gbcMark,
         travelMode : google.maps.TravelMode.DRIVING
     };

     directionsService.route(request, function(response, status) {
         if (status == google.maps.DirectionsStatus.OK) {
             directionsDisplay.setDirections(response);
         }
     });

     directionsDisplay.setMap(map);

    // Stop the side bar from dragging when mousedown/tapdown on the map
    google.maps.event.addDomListener($element[0], 'mousedown', function (e)
    {
      e.preventDefault();
      return false;
    });

	/*	google.maps.event.addListener(map, 'mousedown', function(event)
		{
		  marker = new google.maps.Marker({
			position: new google.maps.LatLng(53.274208, -9.050672),
			content: 'You have created a marker here',
			draggable: false,
			map: map
		  });

		  marker = new google.maps.Marker({
			position: new google.maps.LatLng(53.274207, -9.051102),
      content: 'You have created a marker here',
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
    });*/
      }


      if (document.readyState === "complete") {
        initialize();
      } else {
        google.maps.event.addDomListener(window, 'load', initialize);
      }
    }
  }
});
