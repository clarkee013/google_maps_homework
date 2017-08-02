var MapWrapper = function(container, center, zoom){
    this.googleMap = new google.maps.Map(container, {
    center: center,
    zoom: zoom,
});
this.markers = [];
}

MapWrapper.prototype.addMarker = function(coords, image){
    var marker = new google.maps.Marker({
        position: coords,
        map: this.googleMap,
        icon: image
    });
    this.markers.push(marker);
    marker.addListener('click', function(event) {
    var infowindow = new google.maps.InfoWindow({
      content: "Your marker is at Latittude: " + event.latLng.lat() + " & Longitude: " + event.latLng.lng()
    });
    infowindow.open(this.googleMap, marker);
  }.bind(this));
}

MapWrapper.prototype.addClickEvent = function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event){
        console.log(event.latLng.lat());
        console.log(event.latLng.lng());
        var coords = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
        }
        this.addMarker(coords);
    }.bind(this));
};

MapWrapper.prototype.bounceMarkers = function(){
    this.markers.forEach(function(marker){
        marker.setAnimation(google.maps.Animation.BOUNCE);
    })
};
////// dont delete past here!!
MapWrapper.prototype.goToPub = function(){
    var image = "http://icons.iconarchive.com/icons/graphicloads/food-drink/24/drink-2-icon.png"
    var coords = {
            lat: 55.85938023580518,
            lng: -4.25933450460434
        }
        this.addMarker(coords, image);
        this.googleMap.setCenter(coords);
    };

