function myMap() {
    // The location of Uluru
    var starting = {lat: 43.1566, lng: -77.6088};

    var mapProp= {
        center: starting,
        zoom:11,
    };
    // The map, centered at Uluru
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

    var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">A Fucking Truck</h1>'+
    '<div id="bodyContent">'+
    '<p>body text about the first truck</p>'+
    '</div>'+
    '</div>';

    var infowindow = new google.maps.InfoWindow({
    content: contentString
    });

    var marker = new google.maps.Marker({
    position: starting,
    map: map,
    title: 'Rochester'
    });
    marker.addListener('click', function() {
    infowindow.open(map, marker);
    });
  }

