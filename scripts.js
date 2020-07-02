
var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var wind = document.querySelector('.wind');
var button = document.querySelector('.submit');

button.addEventListener('click', function(name){
    const api = 'https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=2fb1e04cef442262e35b5a9e6c8d231e';

fetch(api)
    .then(response => response.json())
    .then(data => {
        var tempValue = data['main']['temp'];
        var nameValue = data['name'];
        var descValue = data['weather'][0]['description'];
        var windSpeed = data['wind']['speed'];

        main.innerHTML = nameValue;
        desc.innerHTML = "Description - "+descValue;
        temp.innerHTML = "Temperature - "+Math.round((tempValue-273.15)*1.8 + 32)+ "F";
        wind.innerHTML = "Wind Speed - "+windSpeed+"mph";

        input.value = "";


    })

    .catch(err => alert("Something went wrong try again!"));
})
