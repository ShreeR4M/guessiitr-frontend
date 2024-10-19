function onMapClick(e) {
	marker.setLatLng(e.latlng);
}

var map = L.map('map', {
    maxBounds: [[29.858, 77.885], [29.875, 77.905]],
    maxBoundsViscosity: 1.0 
}).setView([29.8673, 77.8955], 16);

var bounds = [[29.858, 77.885], [29.875, 77.905] ];


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
	minZoom: 16,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    useCache: true,
    crossOrigin: true
}).addTo(map);


var marker = L.marker([29.867219237294258, 77.89531946182252]).addTo(map);

map.on('click', onMapClick);
map.on('click', onMapClick);

var lat = 0;
var lon = 0;

window.onload = function() {
    var img = document.getElementById('sampleImage');
    EXIF.getData(img, function() {
         lat = EXIF.getTag(this, "GPSLatitude");
         lon = EXIF.getTag(this, "GPSLongitude");
        var latRef = EXIF.getTag(this, "GPSLatitudeRef") || "N";
        var lonRef = EXIF.getTag(this, "GPSLongitudeRef") || "W";

        if (lat && lon) {
            lat = (lat[0] + lat[1]/60 + lat[2]/3600) * (latRef === "N" ? 1 : -1);
            lon = (lon[0] + lon[1]/60 + lon[2]/3600) * (lonRef === "W" ? -1 : 1);
            console.log("Latitude: " + lat + ", Longitude: " + lon);
        } else {
            console.log("No GPS data found.");
        }
    });
};

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; 
  var dLat = deg2rad(lat2-lat1);  
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

var guessButton = document.getElementById('guess');
guessButton.onclick = CalculateScore;

function CalculateScore(){

	var latlng = marker.getLatLng();
	var lat1 = latlng.lat;
	var lng1 = latlng.lng;

	console.log(lat1, lng1);

	var lat2 = lat;
	var lng2 = lon;

	var distance = getDistanceFromLatLonInKm(lat1, lng1, lat2, lng2)*1000;
	var score = 0;
	
	console.log(distance);
	
	var newMarker = L.marker([lat2, lng2]).addTo(map);
    // var mapDiv = document.getElementById('map');
    // mapDiv.classList.add('fullscreen');

    var latlngs = [
    [lat1, lng1],
    [lat2, lng2]
    ];
    var polyline = L.polyline(latlngs, { color: 'red' }).addTo(map);

    map.fitBounds(polyline.getBounds());

}

