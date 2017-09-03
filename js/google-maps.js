var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 16,
	center: new google.maps.LatLng(37.3824073, -5.9942256), //Sevilla
	mapTypeId: google.maps.MapTypeId.ROADMAP
});

var locations = [
    ['Torre Del Oro', 37.3822047, -5.9950282, 5]
];

var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < locations.length; i++){
	marker = new google.maps.Marker({
		position: new google.maps.LatLng(locations[i][1], locations[i][2]),
		map: map
	});
	google.maps.event.addListener(marker, 'click', (function (marker, i) {
		return function() {
			infowindow.setContent(locations[i][0]);
			infowindow.open(map, marker);
		}
	}) (marker,i));
}