const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cd92ff5fccmsh8aebd32c9b4dbf3p19d6fdjsnfd7b592b1a3f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) => {
	cityName.innerHTML = city

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {

			console.log(response)
			temp.innerHTML = response.temp

			cloud_pct.innerHTML = response.cloud_pct
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			max_temp.innerHTML = response.max_temp
			min_temp.innerHTML = response.min_temp
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
			wind_degrees.innerHTML = response.wind_degrees
			wind_speed.innerHTML = response.wind_speed

		})

		.catch(err => console.error(err));
}

    submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Jaipur")