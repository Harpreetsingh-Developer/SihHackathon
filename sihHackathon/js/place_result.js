var map;

function initialize() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 28.15, lng: 77.22},
    zoom: 15
  });

  
  var request = {
    location: map.getCenter(),
    radius: '500',
    query: 'Jaipur'
  };

  var service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

// Checks that the PlacesServiceStatus is OK, and adds a marker
// using the place ID and location from the PlacesService.
function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    var marker = new google.maps.Marker({
      map: map,
      place: {
        placeId: results[0].place_id,
        location: results[0].geometry.location
      }
    });
  }
}

google.maps.event.addDomListener(window, 'load', initialize);
