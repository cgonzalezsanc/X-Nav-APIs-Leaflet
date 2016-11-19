$(document).ready(function() {
	var map = L.map('map').setView([40.2838, -3.8215], 13);

	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	L.marker([40.2838, -3.8215]).addTo(map)
	   	.bindPopup('Aulario III')
	    .openPopup();

	function onMapClick(e) {
		L.popup()
		    .setLatLng(e.latlng)
		    .setContent("Las coordenadas de este punto son " + e.latlng.toString())
		    .openOn(map);
	}

	map.on('click', onMapClick);

	function onLocationFound(e) {
		var radius = e.accuracy / 2;

		L.marker(e.latlng).addTo(map)
		    .bindPopup("Estas en un punto a menos de " + radius + " metros de aqui")
			.openPopup();

		L.circle(e.latlng, radius).addTo(map);
	}

	function onLocationError(e) {
    	alert("Fallo de localizacion: " + e.message);
	}

	map.on('locationfound', onLocationFound);
	map.on('locationerror', onLocationError);
	map.locate({setView: true, maxZoom: 16});

});
