function onMapClick(e) {
	marker.setLatLng(e.latlng);
}

var map = L.map('map').setView([29.754263, 77.888000], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([29.854263, 77.888000]).addTo(map);

map.on('click', onMapClick);