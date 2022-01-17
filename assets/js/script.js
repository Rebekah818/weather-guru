// function for submit btn

$(document).ready(function () {
    $("#submit").click(function () {
        var cityEl = $(this).parent().siblings("input").val()
        
        // fetch open weather api
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityEl+"&appid=65b56975875192b114dbc4d00909c453")
            .then(response => response.json())
            .then(data => {
            //    console.log(data)
               getCityInfo(data.coord.lat, data.coord.lon)
            });
    });
});
function getCityInfo(lat,lon) {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&units=imperial&appid=65b56975875192b114dbc4d00909c453")
    .then(response => response.json())
    .then(data => {
  
        
    const forecast = $("#forecast") 
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    for (let i = 1; i < 6; i++) {
        // console.log(data.daily[i]);
       var dayCard = $("<div>").addClass("col");
       var formattedDate = new Date(data.daily[i].dt*1000);
       var date = dayCard.append("<p>" + formattedDate.toLocaleDateString(undefined , options) + "</p>");
       var weatherIcon = data.daily[i].weather[0].icon;
       var weatherImg = $("<img>").attr("src" , "http://openweathermap.org/img/wn/"+weatherIcon+"@2x.png");
       var icon = dayCard.append(weatherImg);
       var date = dayCard.append("<p>Temperature: " + data.daily[i].temp.day + "</p>");
       var date = dayCard.append("<p>Wind: " + data.daily[i].wind_speed + "</p>");
       var date = dayCard.append("<p>Humidity: " + data.daily[i].humidity + "</p>");
       forecast.append(dayCard);
    }
    

    });
};

