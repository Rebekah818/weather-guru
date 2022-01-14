// function for submit btn

$(document).ready(function () {
    $("#submit").click(function () {
        var cityEl = $(this).parent().siblings("input").val()
        
        // fetch open weather api
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityEl+"&appid=65b56975875192b114dbc4d00909c453")
            .then(response => response.json())
            .then(data => {
                getCityInfo(data.coord.lat, data.coord.lon)
            });
    });
});
function getCityInfo(lat,lon) {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&units=imperial&appid=65b56975875192b114dbc4d00909c453")
    .then(response => response.json())
    .then(data => {
    
    });
};
 getCityInfo();
