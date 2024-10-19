const images = ["IITR-database/PXL_20241019_010051413.jpg", "IITR-database/PXL_20241019_062000061.jpg", 
"IITR-database/PXL_20241019_010101684.jpg", "IITR-database/PXL_20241019_062019414.jpg", 
"IITR-database/PXL_20241019_011146373.jpg", "IITR-database/PXL_20241019_062037181.jpg", 
"IITR-database/PXL_20241019_011153433.jpg", "IITR-database/PXL_20241019_062057285.jpg", 
"IITR-database/PXL_20241019_011203991.jpg", "IITR-database/PXL_20241019_062120503.jpg", 
"IITR-database/PXL_20241019_054000618.jpg", "IITR-database/PXL_20241019_062143280.jpg", 
"IITR-database/PXL_20241019_054231239.jpg", "IITR-database/PXL_20241019_062200995.jpg", 
"IITR-database/PXL_20241019_054426559.jpg", "IITR-database/PXL_20241019_062212864.jpg", 
"IITR-database/PXL_20241019_054638596.jpg", "IITR-database/PXL_20241019_062236428.jpg", 
"IITR-database/PXL_20241019_054659281.jpg", "IITR-database/PXL_20241019_062311363.jpg", 
"IITR-database/PXL_20241019_054743069.jpg", "IITR-database/PXL_20241019_062322591.jpg", 
"IITR-database/PXL_20241019_054749078.jpg", "IITR-database/PXL_20241019_062356760.jpg", 
"IITR-database/PXL_20241019_054822061.jpg", "IITR-database/PXL_20241019_062458494.jpg", 
"IITR-database/PXL_20241019_054937246.jpg", "IITR-database/PXL_20241019_062526933.jpg", 
"IITR-database/PXL_20241019_055018107.jpg", "IITR-database/PXL_20241019_062552161.jpg", 
"IITR-database/PXL_20241019_055145126.jpg", "IITR-database/PXL_20241019_062602962.jpg", 
"IITR-database/PXL_20241019_055211411.jpg", "IITR-database/PXL_20241019_062636081.jpg", 
"IITR-database/PXL_20241019_055235503.jpg", "IITR-database/PXL_20241019_062644485.jpg", 
"IITR-database/PXL_20241019_055326272.jpg", "IITR-database/PXL_20241019_062706072.jpg", 
"IITR-database/PXL_20241019_055345142.jpg", "IITR-database/PXL_20241019_062822579.jpg", 
"IITR-database/PXL_20241019_055454136.jpg", "IITR-database/PXL_20241019_062913384.jpg", 
"IITR-database/PXL_20241019_055535721.jpg", "IITR-database/PXL_20241019_062942101.jpg", 
"IITR-database/PXL_20241019_055638945.jpg", "IITR-database/PXL_20241019_062946332.jpg", 
"IITR-database/PXL_20241019_055738761.jpg", "IITR-database/PXL_20241019_063008798.jpg", 
"IITR-database/PXL_20241019_055751830.jpg", "IITR-database/PXL_20241019_063018368.jpg", 
"IITR-database/PXL_20241019_055801667.jpg", "IITR-database/PXL_20241019_063104499.jpg", 
"IITR-database/PXL_20241019_055831795.jpg", "IITR-database/PXL_20241019_063126776.jpg", 
"IITR-database/PXL_20241019_055915371.jpg", "IITR-database/PXL_20241019_063144590.jpg", 
"IITR-database/PXL_20241019_060023148.jpg", "IITR-database/PXL_20241019_063147859.jpg", 
"IITR-database/PXL_20241019_060054673.jpg", "IITR-database/PXL_20241019_063312462.jpg", 
"IITR-database/PXL_20241019_060126728.jpg", "IITR-database/PXL_20241019_063337459.jpg", 
"IITR-database/PXL_20241019_060133245.jpg", "IITR-database/PXL_20241019_063357676.jpg", 
"IITR-database/PXL_20241019_060319752.jpg", "IITR-database/PXL_20241019_063426539.jpg", 
"IITR-database/PXL_20241019_060429928.jpg", "IITR-database/PXL_20241019_063434931.jpg", 
"IITR-database/PXL_20241019_060445398.jpg", "IITR-database/PXL_20241019_063514082.jpg", 
"IITR-database/PXL_20241019_060525497.jpg", "IITR-database/PXL_20241019_063540614.jpg", 
"IITR-database/PXL_20241019_060559299.jpg", "IITR-database/PXL_20241019_063553011.jpg", 
"IITR-database/PXL_20241019_060612944.jpg", "IITR-database/PXL_20241019_063641787.jpg", 
"IITR-database/PXL_20241019_060644924.jpg", "IITR-database/PXL_20241019_063712046.jpg", 
"IITR-database/PXL_20241019_060713199.jpg", "IITR-database/PXL_20241019_063731245.jpg", 
"IITR-database/PXL_20241019_060725520.jpg", "IITR-database/PXL_20241019_063759642.jpg", 
"IITR-database/PXL_20241019_060744791.jpg", "IITR-database/PXL_20241019_063830304.jpg", 
"IITR-database/PXL_20241019_060849232.jpg", "IITR-database/PXL_20241019_063858801.jpg", 
"IITR-database/PXL_20241019_060902290.jpg", "IITR-database/PXL_20241019_063938685.jpg", 
"IITR-database/PXL_20241019_060920549.jpg", "IITR-database/PXL_20241019_064006550.jpg", 
"IITR-database/PXL_20241019_060936886.jpg", "IITR-database/PXL_20241019_064030714.jpg", 
"IITR-database/PXL_20241019_061009432.jpg", "IITR-database/PXL_20241019_064039813.jpg", 
"IITR-database/PXL_20241019_061058966.jpg", "IITR-database/PXL_20241019_064052632.jpg", 
"IITR-database/PXL_20241019_061115499.jpg", "IITR-database/PXL_20241019_064119376.jpg", 
"IITR-database/PXL_20241019_061128939.jpg", "IITR-database/PXL_20241019_064148662.jpg", 
"IITR-database/PXL_20241019_061157593.jpg", "IITR-database/PXL_20241019_064207901.jpg", 
"IITR-database/PXL_20241019_061231547.jpg", "IITR-database/PXL_20241019_064214545.jpg", 
"IITR-database/PXL_20241019_061414095.jpg", "IITR-database/PXL_20241019_064310810.jpg", 
"IITR-database/PXL_20241019_061500868.jpg", "IITR-database/PXL_20241019_064327356.jpg", 
"IITR-database/PXL_20241019_061523436.jpg", "IITR-database/PXL_20241019_064352472.jpg", 
"IITR-database/PXL_20241019_061540089.jpg", "IITR-database/PXL_20241019_064405308.jpg", 
"IITR-database/PXL_20241019_061550291.jpg", "IITR-database/PXL_20241019_064414615.jpg", 
"IITR-database/PXL_20241019_061627202.jpg", "IITR-database/PXL_20241019_064453876.jpg", 
"IITR-database/PXL_20241019_061718529.jpg", "IITR-database/PXL_20241019_064516970.jpg", 
"IITR-database/PXL_20241019_061758513.jpg", "IITR-database/PXL_20241019_064523296.jpg", 
"IITR-database/PXL_20241019_061819930.jpg", "IITR-database/PXL_20241019_064553126.jpg", 
"IITR-database/PXL_20241019_061830082.jpg", "IITR-database/PXL_20241019_064610230.jpg", 
"IITR-database/PXL_20241019_061839748.jpg", "IITR-database/PXL_20241019_064629638.jpg", 
"IITR-database/PXL_20241019_061901281.jpg", "IITR-database/PXL_20241019_064657215.jpg", 
"IITR-database/PXL_20241019_061921181.jpg", "IITR-database/PXL_20241019_064701877.jpg", 
"IITR-database/PXL_20241019_061940425.jpg"
];

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}


function onMapClick(e) {
	marker.setLatLng(e.latlng);
}


var map = L.map('map', {
    maxBounds: [[29.858, 77.885], [29.875, 77.905]],
    maxBoundsViscosity: 1.0 
}).setView([29.8673, 77.8955], 16);

var bounds = [[29.858, 77.885], [29.875, 77.905] ];

var latlngs = [
    [29.858, 77.885],
    [29.865, 77.890],
    [29.870, 77.895],
    [29.875, 77.905]
];


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
    imag = "sample.jpg";
    document.getElementById('sampleImage').src = imag;
    imag = document.getElementById('sampleImage');
    EXIF.getData(imag, function() {
        var latData = EXIF.getTag(this, "GPSLatitude");
        var lonData = EXIF.getTag(this, "GPSLongitude");
        var latRef = EXIF.getTag(this, "GPSLatitudeRef") || "N";
        var lonRef = EXIF.getTag(this, "GPSLongitudeRef") || "W";
        
        if (latData && lonData) {
            lat = (latData[0] + latData[1]/60 + latData[2]/3600) * (latRef === "N" ? 1 : -1);
            lon = (lonData[0] + lonData[1]/60 + lonData[2]/3600) * (lonRef === "W" ? -1 : 1);
            console.log("Latitude: " + lat + ", Longitude: " + lon);
        } else {
            console.log("No GPS data found.");
        }
    });
};


var nextRoundButton = document.getElementById('next');

nextRoundButton.onclick = function() {   
	
	nextRoundButton.style.display = "none";
	guessButton.style.display = "block";
	
    map.eachLayer(function (layer) {
        if(layer instanceof L.Marker || layer instanceof L.Polyline) {
            map.removeLayer(layer);
        }
    });
    marker = L.marker([29.867219237294258, 77.89531946182252]).addTo(map);
    var imag = new Image();
    imag.src = getRandomImage();
    document.getElementById('sampleImage').src = imag.src;

    current_img = imag;

    current_img.onload = function() {
    EXIF.getData(current_img, function() {
        console.log("Image loaded.");
        var latData1 = [];
        var lonData1 = [];
        lat = 0;
        lon = 0;
        latData1 = EXIF.getTag(current_img, "GPSLatitude");
        lonData1 = EXIF.getTag(current_img, "GPSLongitude");
        var latRef = EXIF.getTag(current_img, "GPSLatitudeRef") || "N";
        var lonRef = EXIF.getTag(current_img, "GPSLongitudeRef") || "W";

        if (latData1 && lonData1) {
            lat = (latData1[0] + latData1[1]/60 + latData1[2]/3600) * (latRef === "N" ? 1 : -1);
            lon = (lonData1[0] + lonData1[1]/60 + lonData1[2]/3600) * (lonRef === "W" ? -1 : 1);
            console.log("new Latitude: " + lat + ", new Longitude: " + lon);
        } else {
            console.log("No GPS data found.");
        }
    });
    };
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
guessButton.onclick = function() {

    CalculateScore();
	guessButton.style.display = "none";
	nextRoundButton.style.display = "block";
	// document.getElementById('map').classList.add('fullscreen');

};

function CalculateScore(){

	var latlng = marker.getLatLng();
	var lat1 = latlng.lat;
	var lng1 = latlng.lng;

	var lat2 = lat;
	var lng2 = lon;

	var distance = getDistanceFromLatLonInKm(lat1, lng1, lat2, lng2)*1000;
	var score = 0;
	
	console.log("distance" + distance);
	
	var newMarker = L.marker([lat2, lng2]).addTo(map);
	console.log(lat2, lng2);

    var latlngs = [
    [lat1, lng1],
    [lat2, lng2]
    ];

    var polyline = L.polyline(latlngs, { color: 'red' }).addTo(map);

	var sigma = 25;
	var score = 1000*Math.exp((-1*distance*distance*distance)/Math.pow(sigma, 5));
	console.log("score" + " " + Math.round(score));

    map.fitBounds(polyline.getBounds());
	guessButton=document.getElementById('guess');


}
