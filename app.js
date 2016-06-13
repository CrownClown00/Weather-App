$(document).ready(function() {

  var success = function(position) {
    var coordinates = position.coords;
    var longitude = coordinates.longitude;
    var latittude = coordinates.latitude;
    var url = "http://api.openweathermap.org/data/2.5/forecast/weather?lat=" + latittude + "&lon=" + longitude + "&APPID=038243b3b5b7501af0c45899e32c9e66";
    var data;
    var callback = function(response) {
     console.log(response);
     console.log(response.list[0].weather.description);
      //console.log(response.list[0].main.temp);
     
      var weatherDes=response.list[0].weather[0].description;
      var Fartemp=Math.round((response.list[0].main.temp-273.15)*1.8+32);
      var cond =response.cod;
      //$(".Fartemperature").append("<h1>Today's Weather: "+Fartemp+"</h1>");
       //$(".Celtemperature").append("<h1>Today's Weather: test</h1>");
      console.log("owf owf-"+cond);
      $("#Weatherinfo").append("<h1>Today's Weather: "+weatherDes+"</h1>");
      $("i").addClass("owf owf-"+cond+" owf-5x");
     $("#temperature").addClass("Celtemperature"); 
     $("#tempChange").click(function(){
        $("#temperature").toggleClass("Fartemperature Celtemperature"); 
         

     })
      //$("#temperature").append("<h1>Today's Weather: "+Fartemp+"</h1>");

    };

    $.getJSON(url, callback);

  };
  navigator.geolocation.getCurrentPosition(success);

});