function initMap() {
  const center = { lat: 55.8642, lng: -4.2518 }; // Glasgow
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: center,
    styles: [ { elementType: "geometry", stylers: [{ color: "#1d2c4d" }] } ]
  });
  new google.maps.Marker({ position: center, map: map });
}
