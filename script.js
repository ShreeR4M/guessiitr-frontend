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
map.on('click', onMapClick);


window.onload = function() {
    var img = document.getElementById('sampleImage');
    EXIF.getData(img, function() {
        var lat = EXIF.getTag(this, "GPSLatitude");
        var lon = EXIF.getTag(this, "GPSLongitude");
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
