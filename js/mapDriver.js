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
        mapTypeControl: false
    };
    // The map, centered at Uluru
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    // trucks=[
    //     {
    //         name: "Chris's Stupid Taco Truck",
    //         description: "TACOS!",
    //         twitter: "@_tweedge",
    //         lat: 43.155916,
    //         long: -77.605675
    //     },
    //     {
    //         name: "Bitler's cheeseless pizza",
    //         description: "Pizza!",
    //         twitter: "@chrissy_bits",
    //         lat: 43.156071,
    //         long: -77.605004
    //     }
    // ]

    var request = new XMLHttpRequest();
    request.open('GET', 'https://roc.foodtrax.io/backend/api/trucks.php');
    request.responseType='text';
    request.onload = function() {
        trucks=JSON.parse(request.response);
        addMapMarkers(map,trucks);
    };
    request.send();

    infoWindow = new google.maps.InfoWindow;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        infoWindow.open(map);
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
    infoWindows=[]

    trucks.forEach(truck =>{
        var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h5 id="firstHeading" class="firstHeading">'+truck.name+'</h1>'+
        '<div id="bodyContent">'+
        // '<p>body text about the first truck</p>'+
        '</div>'+
        '</div>';


        var infowindow = new google.maps.InfoWindow({
        content: contentString
        });

        infoWindows.push(infowindow)
        var marker = new google.maps.Marker({
        position: {lat: truck.lat, long: truck.long},
        position: new google.maps.LatLng(truck.lat, truck.long),
        map: map,
        title: 'Rochester'
        });
        marker.addListener('click', function() {
            infoWindows.forEach(iw =>{
                iw.close();
            })
        infowindow.open(map, marker);

        });
        markers.push(marker)

    })


    var markerCluster = new MarkerClusterer(map, markers,
        {
            imagePath: 'media/m',
            maxZoom: '17'
    });


  }
