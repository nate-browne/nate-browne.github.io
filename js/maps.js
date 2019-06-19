'use strict';

function gen_map() {

  // Coordinates of CSE buildings
  let coordinates = {
    'Duke': '36.004600 -78.83729',
    'Hawaii': '21.297760 -157.815140',
    'USC': '34.019910 -118.288980',
    'UCRiverside': '33.9752643 -117.3260679',
    'UCLA': '34.069530 -118.444870',
    'UDub': '47.656420 -122.304780',
    'Virginia': '38.031979 -78.511192',
    'Princeton': '40.350720 -74.652070',
    'NYU': '40.728680 -73.995580',
    'Maryland': '38.999610 -76.942200',
    'Columbia': '40.809520 -73.959530',
    'UCSD': '32.8818 -117.2335',
    'Boulder': '40.006387 -105.261582'
  }

  let mapOptions = {
    center: new google.maps.LatLng(coordinates.UCSD.split(" ")[0], coordinates.UCSD.split(" ")[1]),
    zoom: 15,
    scrollwheel: false, // make map zoomable
    draggable: true, // make map interactive
    mapTypeId: google.maps.MapTypeId.ROADMAP // set type of the map
  };

  // Create the map
  let map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

  // Add a location marker to the map
  let marker = new google.maps.Marker({
    position: mapOptions.center,
  });

  // Put the marker on the map
  marker.setMap(map);
}
