
// // GeoJSON data
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};



// L.geoJSON(sanFranAirport).addTo(map);


// create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
 });

let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});


// create base layer that holds both maps
let baseMaps = {
  Street: streets,
  Dark: dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [30, 30],
  zoom: 2,
  layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Grabbing GeoJSON data
// L.geoJSON(sanFranAirport,{
//   //turn each feature into a marker using pointToLayer
//   pointToLayer: function(feature, latlng){
//     return L.marker(latlng)
//     .bindPopup("<h2>" + feature.properties.city + "</h2>");
//   }
// }).addTo(map)

// // onEachFeature
// L.geoJSON(sanFranAirport, {
//   onEachFeature: function(feature, layer){
//     console.log(layer);
//     layer.bindPopup("<h2>" + "Airport Code: " + feature.properties.faa + "<hr>" + "Airport name: " + feature.properties.name );
//   }
// }).addTo(map);


//Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/wbelayne21/Mapping_Earthquakes/Mapping_Lines/majorAirports.json";

d3.json(airportData).then(function(data){
//   // create a GeoJSON layer with the retrieved data
  L.geoJSON(data).addTo(map).bindPopup("<h2>" + "Airport code: "+ feature.properties.faa +
  "<hr>" + "Airport name: " + feature.properties.name +"</h2>");
});