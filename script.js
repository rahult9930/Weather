const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1047f2232amsh93c8e649803a350p17194djsnb13a7088580d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{

    cityName.innerHTML = city.toUpperCase()
    

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
        
        
        console.log(response)
                    cloud_pct.innerHTML = response.cloud_pct 
                    temp.innerHTML = response.temp 
                    feels_like.innerHTML = response.feels_like 
                    humidity.innerHTML = response.humidity 
                    min_temp.innerHTML = response.min_temp 
                    max_temp.innerHTML = response.max_temp 
                    wind_speed.innerHTML = response.wind_speed 
                    wind_degrees.innerHTML = response.wind_degrees 
                    sunrise.innerHTML = response.sunrise 

                    
                    
                    
                   
                   


    })
	.catch(err => console.error(err));
}

Submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Jodhpur")





fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then((response) => {
        
        
        console.log(response)
                    

                    
                    temp2.innerHTML = response.temp
                    feels_like2.innerHTML = response.feels_like
                    humidity2.innerHTML = response.humidity
                    min_temp2.innerHTML = response.min_temp
                    max_temp2.innerHTML = response.max_temp
                    wind_speed2.innerHTML = response.wind_speed
                    wind_degrees2.innerHTML = response.wind_degrees
                    sunrise2.innerHTML = response.sunrise
                    
                   
                   


    })
	.catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Melbourne', options)
	.then(response => response.json())
	.then((response) => {
        
        
        console.log(response)
                    

                    
                    temp3.innerHTML = response.temp
                    feels_like3.innerHTML = response.feels_like
                    humidity3.innerHTML = response.humidity
                    min_temp3.innerHTML = response.min_temp
                    max_temp3.innerHTML = response.max_temp
                    wind_speed3.innerHTML = response.wind_speed
                    wind_degrees3.innerHTML = response.wind_degrees
                    sunrise3.innerHTML = response.sunrise
                    
                   
                   


    })
	.catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London', options)
	.then(response => response.json())
	.then((response) => {
        
        
        console.log(response)
                    

                    
                    temp4.innerHTML = response.temp
                    feels_like4.innerHTML = response.feels_like
                    humidity4.innerHTML = response.humidity
                    min_temp4.innerHTML = response.min_temp
                    max_temp4.innerHTML = response.max_temp
                    wind_speed4.innerHTML = response.wind_speed
                    wind_degrees4.innerHTML = response.wind_degrees
                    sunrise4.innerHTML = response.sunrise
                    
                   
                   


    })
	.catch(err => console.error(err));


    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Sydney', options)
	.then(response => response.json())
	.then((response) => {
        
        
        console.log(response)
                    

                    
                    temp5.innerHTML = response.temp
                    feels_like5.innerHTML = response.feels_like
                    humidity5.innerHTML = response.humidity
                    min_temp5.innerHTML = response.min_temp
                    max_temp5.innerHTML = response.max_temp
                    wind_speed5.innerHTML = response.wind_speed
                    wind_degrees5.innerHTML = response.wind_degrees
                    sunrise5.innerHTML = response.sunrise
                    
                   
                   


    })
	.catch(err => console.error(err));
