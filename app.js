$(document).ready(function(){

var success=function(position){
           var coordinates=position.coords;
          
           var longitude=coordinates.longitude;
           var latittude=coordinates.latitude;
          
          console.log(latitude);
          console.log(longitude);

          
      }
      navigator.geolocation.getCurrentPosition(success)
        




})