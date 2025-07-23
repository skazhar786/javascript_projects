const  api_key = "44eddd9e487972fc9edc66dd31ab99f3"
const api_url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather_icon img')
const weather = document.querySelector('.weather')

async function checkWeather(city){
    const response = await fetch(api_url + city +`&appid=${api_key}`)

    if(response.status == 404){
        document.querySelector('.error').style.display = 'block'
        weather.style.display = 'none'
    }else{
        let data = await response.json()
        console.log(data);
        document.querySelector('.city').innerHTML = data.name
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp )+ "°c"
        document.querySelector('.humidity').innerHTML = data.main.humidity +"%"
        document.querySelector('.wind').innerHTML = data.wind.speed + "km/h"
        console.log(data.weather[0].main);
        
        
        if(data.weather[0].main == 'Clouds'){
            weatherIcon.src = 'images/clouds.png';
        }else if(data.weather[0].main == 'Clear'){
            weatherIcon.src  = "images/clear.png";
        }else if(data.weather[0].main == 'Rain'){
            weatherIcon.src  = "images/rain.png";
        }else if(data.weather[0].main == 'Drizzle'){
            weatherIcon.src  = "images/drizzle.png";
        }else if(data.weather[0].main == 'Mist'){
            weatherIcon.src  = "images/mist.png";
        }else if(data.weather[0].main == 'Snow'){
            weatherIcon.src  = "images/snow.png";
        }

           weather.style.display = 'block'
      document.querySelector('.error').style.display = 'none'
    
    }

    searchBox.value = ""

    
 
}

searchBtn.addEventListener('click',function(){
    checkWeather(searchBox.value)
})


