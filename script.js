let images = [];
fetch('/imageUrls.txt')
.then(response => response.text())
.then(data => {
    images = data.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    console.log(images);
})
.catch(error => console.error('Error fetching the file:', error));

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

	startTimer(15 , timer , sampleImage);

    imag = "https://i.ibb.co/h7Yf95M/PXL-20241019-063126776.jpg";
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
var timer=document.getElementById('timer');
var timeupDiv=document.getElementById('timeup');
var sampleImage=document.getElementById('sampleImage');
var interval;

nextRoundButton.onclick = function() {   
	
  	nextRoundButton.style.display = "none";
    guessButton.style.display = "block";
    timer.style.display = "block";
    timeupDiv.style.display = "none";
    sampleImage.style.filter = "none";
	
    map.eachLayer(function (layer) {
        if(layer instanceof L.Marker || layer instanceof L.Polyline) {
            map.removeLayer(layer);
        }
    });

	clearInterval(interval);
	startTimer(15 , timer , sampleImage);

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

function startTimer(duration, display, image) {
    var timer = duration, seconds;
    interval = setInterval(function() {
        seconds = parseInt(timer % 60, 10);

        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = "00:" + seconds;

		if( timer < 6){
			display.style.color = (timer % 2 === 0) ? "red" : "white";
		}

        if (--timer < 0) {
            clearInterval(interval);
            display.style.display = "none";
			timeupDiv.style.display = "block";
            image.style.filter = "blur(50px)"; 
			display.style.color = "white";
        }
    }, 1000);
}

function ResetTimer(){
	timer.style.display = "block";
	timeupDiv.style.display = "none";
	sampleImage.style.filter = "none";
	startTimer(15 , timer , sampleImage);
}