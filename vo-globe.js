function Globe(name) {
	this.name = name;
}

function Place(name,lat,lon) {
	this.name = name;
	this.coords = { 
		lat : lat,
		lon : lon
	};
}

