




var mymap = L.map('mapid', {
    center: L.latLng(-5.99404, 28.75621),
    zoom: 5
});

var baselayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibWFoYWhhIiwiYSI6ImNqcXlrZjhwbTAzNXA0MnFzdHp5cHJydWkifQ.uvuKJiKLKGtnReI1drC1-Q'
});




baselayer.addTo(mymap);


var data ={
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -5.22674560546875,
          26.82407078047018
        ]
      },
      "properties": {
    "name": "null island",
        "vidsrc": "https://www.youtube.com/embed/BS9Y7ozXa60"}
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          3.91387939453125,
          32.324275588876574
        ]
      },
      "properties": {
    "name": "Testmarker",
        "vidsrc": "https://www.youtube.com/embed/BS9Y7ozXa60"}
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          0.39825439453125,
          46.619261036171515
        ]
      },
      "properties": {
    "name": "T�tata",
        "vidsrc": "https://www.youtube.com/embed/BS9Y7ozXa60"}
    }
  ]
}



var customOptions =
        {
        'maxWidth': '560',
        'className' : 'custom'
        }

var layerGroup = L.geoJSON(data, {
  onEachFeature: function (feature, layer) {
    layer.bindPopup('<h1>'+feature.properties.name+'</h1><p><iframe width="560" height="315" src='+feature.properties.vidsrc+' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>', customOptions);
  }
}).addTo(mymap);
