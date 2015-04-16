

function initialize() {

if (navigator.geolocation) { 
   navigator.geolocation.getCurrentPosition(function (position) {                                                           
     var latitude = position.coords.latitude;                    
     var longitude = position.coords.longitude;                 
     var coords = new google.maps.LatLng(latitude, longitude); 
     var directionsService = new google.maps.DirectionsService();
     var directionsDisplay = new google.maps.DirectionsRenderer();
     var mapOptions = 
     {
       zoom: 15,  
       center: coords, 
       mapTypeControl: true, 
       navigationControlOptions:
       {
         style: google.maps.NavigationControlStyle.SMALL 
       },
       mapTypeId: google.maps.MapTypeId.ROADMAP 
     };
     map = new google.maps.Map(  document.getElementById("map-canvas-mainguard"), mapOptions );
     directionsDisplay.setMap(map);
     directionsDisplay.setPanel(document.getElementById('panel'));
     var request = {
       origin: coords,
       destination: '52.3529449, -7.7013981',
       travelMode: google.maps.DirectionsTravelMode.DRIVING
     };

     directionsService.route(request, function (response, status) {
       if (status == google.maps.DirectionsStatus.OK) {
         directionsDisplay.setDirections(response);
       }
     });
   });
 }

 




}

google.maps.event.addDomListener(window, 'load', initialize);