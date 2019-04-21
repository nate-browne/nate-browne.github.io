'use strict';

function gen_map() {

  // Generate a new map based on UCSD CSE building coordinates
  // SDSU CS coordinates: 32.776742, -117.069266
  let mapOptions = {
    center: new google.maps.LatLng(32.8818, -117.2335),
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