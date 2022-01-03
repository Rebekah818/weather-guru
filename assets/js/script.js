
// fetch open weather api
fetch("api.openweathermap.org/data/2.5/weather?q={city name}&appid={65b56975875192b114dbc4d00909c453}")
    .then(response => response.json())
    .then(data => console.log(data));

// Add eventlistener btn for submit

