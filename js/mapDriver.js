function initMap() {
    // The location of Uluru
    var starting = {lat: 43.156016, lng: -77.605294};

    var mapProp= {
        center: starting,
        zoom:17,
        streetViewControl: false,
        fullscreenControl: false,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM
        },
        mapTypeControl: false,
        gestureHandling: 'greedy'

    };
    // The map, centered at Uluru
    map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

    var request = new XMLHttpRequest();
    request.open('GET', 'https://roc.foodtrax.io/backend/api/trucks.php');
    request.responseType='text';
    request.onload = function() {
        trucks = JSON.parse(request.response);
        betterTrucks = addMapMarkers(map,trucks);
        makeEntries(map,betterTrucks);
    };
    request.send();

    infoWindow = new google.maps.InfoWindow;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        setUserLocation(map, pos)
        map.setCenter(pos);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}

  function addMapMarkers(map, trucks){
    markers=[]
    trucks.forEach(truck =>{
        var navLink = 'https://www.google.com/maps/search/?api=1&query=' + truck.lat + ',' + truck.long
        var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h5 id="firstHeading" class="firstHeading">'+truck.name+'</h1>'+
        '<div id="bodyContent">'+
        // '<p>body text about the first truck</p>'+
        '</div>'+
        '<a class=\'waves-effect waves-light foodtrax-peach black-text btn-small\' href=\'' + navLink +
        '\'><i class="material-icons left">near_me</i>Directions</a>'
        '</div>';


        var infowindow = new google.maps.InfoWindow({
        content: contentString
        });

        truck.iw=infowindow
        var marker = new google.maps.Marker({
        position: {lat: truck.lat, long: truck.long},
        position: new google.maps.LatLng(truck.lat, truck.long),
        map: map,
        icon: 'media/trucc.png',
        optimized: false,
        title: 'Rochester'
        });
        marker.addListener('click', function() {
            trucks.forEach(truck =>{
                truck.iw.close();
            })
        infowindow.open(map, marker);

        });
        truck.marker = marker
    })


    var markerCluster = new MarkerClusterer(map, trucks.map(x => x.marker),
        {
            imagePath: 'media/m',
            maxZoom: '17'
    });

    return trucks;

  }

  function setUserLocation(map, latlng) {
    var image = 'media/loc1.png';

    var marker = new google.maps.Marker({
      position: latlng,
      title: "Your current location",
      icon: image,
      optimized: false
    });
    // To add the marker to the map, call setMap();
    marker.setMap(map);
  }
