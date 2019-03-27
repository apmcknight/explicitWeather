// Makes Weather API Call...
    const apiKey = `https://api.openweathermap.org/data/2.5/weather?zip=45044,us&appid=5a0b396cf9576b707a085b16a204ac46`;

$.getJSON(apiKey, function(apiData){
    console.log(apiData)

    // Pulls the tempature from the apiData, and subtracts 273...
    var temp = apiData.main.temp - 273;

    // The apiData for tempature comes back in Kelvin, this converts it to Fahrenheit...
    let tempF = Math.floor(temp * (9/5) + 32);

    // Pulls the city Name from the apiData...
    let city = apiData.name;

    // Adds the tempature in Fahrenheit to the DOM...
    $("#data").append("<h2>" + "It's currently " + "<span class='large'>" + tempF + "</span>" + " degrees Fahrenheit " + "in " + city + "!" + "</h2>");

    // Logic for temp sayings...
    if(tempF >= 75){
        $("#saying").append("<h2>" + "Dang! That's really friggin' hawt! 🔥" + "</h2>");
        $("html").css("background-color", "red");
    } else if(tempF <= 40) {
        $("#saying").append("<h2>" + "Holy Hockeysticks! That's really cold... Brrr. 🏂" + "</h2>");
        $("html").css("background-color", "blue")        
        
    } else{
        $("#saying").append("<h2>" + "Is it Cold, is it Hot? Nobody Knows. Or Cares!" + "</h2>");
        $("html").css("background-color", "white");
        $("body > .temperature").css("color", "black");
    }
});




