

var mymap = L.map('mapid').setView([27.5, -0.09],4);

var baselayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibWFoYWhhIiwiYSI6ImNqcXlrZjhwbTAzNXA0MnFzdHp5cHJydWkifQ.uvuKJiKLKGtnReI1drC1-Q'
});




baselayer.addTo(mymap);
