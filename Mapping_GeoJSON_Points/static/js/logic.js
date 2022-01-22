
// GeoJSON data
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.5, -122.5], 10);

L.geoJSON(sanFranAirport).addTo(map);


// create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/outdoors-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
}).addTo(map); 

// Grabbing GeoJSON data
L.geoJSON(sanFranAirport,{
  //turn each feature into a marker using pointToLayer
  pointToLayer: function(feature, latlng){
    return L.marker(latlng)
    .bindPopup("<h2>" + feature.properties.city + "</h2>");
  }
}).addTo(map)

// onEachFeature
L.geoJSON(sanFranAirport, {
  onEachFeature: function(feature, layer){
    console.log(layer);
    layer.bindPopup("<h2>" + "Airport Code: " + feature.properties.faa + "<hr>" + "Airport name: " + feature.properties.name );
  }
}).addTo(map);