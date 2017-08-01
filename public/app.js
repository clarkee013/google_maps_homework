var initialize = function(){
    var center = {lat: 55.857103, lng: -4.243951 };
    var zoom = 17;
    var mapDiv = document.querySelector("#main-map");
    var mainMap = new MapWrapper(mapDiv, center, zoom);

    mainMap.addMarker(center);

    mainMap.addClickEvent();

    var button = document.querySelector("#bounce-button");
    button.addEventListener("click", mainMap.bounceMarkers.bind(mainMap));

    var pubButton = document.querySelector("#pub-button");
    pubButton.addEventListener("click", mainMap.goToPub.bind(mainMap));
}

window.addEventListener("load", initialize);