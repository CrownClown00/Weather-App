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
      console.log("owf owf-"+cond);
      $("#Weatherinfo").append("<h1>Today's Weather: "+weatherDes+"</h1>");
      $("i").addClass("owf owf-"+cond+" owf-5x");
     
     $("#tempChange").click(function(){
              /*("#temperature").toggle(function(){

                $(this).append("<h1>Today's Weather: "+Fartemp+"</h1>")
                $(this).append("<h1>Today's Weather: "+Fartemp+"</h1>")
              });*/
            var Fartempdisplay;
            //var Celtempdisplay="";
            //Fartempdisplay.show()
            if(Fartempdisplay){
              $("#temperature").empty();
              $("#temperature").append("<h1>Today's Weather:  blah blah</h1>");
              Fartempdisplay=false;

            }else if(Fartempdisplay==false){
              $("#temperature").empty();
              $("#temperature").append("<h1>Today's Weather: "+Fartemp+"</h1>");
            }

     })
      //$("#temperature").append("<h1>Today's Weather: "+Fartemp+"</h1>");

    };

    $.getJSON(url, callback);

  };
  navigator.geolocation.getCurrentPosition(success);

});