$(document).ready(function() {

  var success = function(position) {
    var coordinates = position.coords;
    var longitude = coordinates.longitude;
    var latittude = coordinates.latitude;
    var url = "http://api.openweathermap.org/data/2.5/forecast/weather?lat=" + latittude + "&lon=" + longitude + "&APPID=038243b3b5b7501af0c45899e32c9e66";
    var data;
    var callback = function(response) {
     // console.log(response.list[0].weather);
      console.log(response);
    };

    $.getJSON(url, callback);

  };
  navigator.geolocation.getCurrentPosition(success);

});