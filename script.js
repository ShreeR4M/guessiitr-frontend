function onMapClick(e) {
	alert("You clicked the map at " + e.latlng);
}

var map = L.map('map').setView([29.854263, 77.888000], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

map.on('click', onMapClick);