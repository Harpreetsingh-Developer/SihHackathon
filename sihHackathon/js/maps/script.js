// Initialize and add the map
let map;

async function initMap() {
  const position = { lat:28.61 , lng: 77.22 };
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  
  map = new Map(document.getElementById("map"), {
    zoom: 10,
    center: position,
    mapId: "eebf64470e0b748d",
  });
  
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Delhi",
  });
}

initMap();