

const optionss = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cd92ff5fccmsh8aebd32c9b4dbf3p19d6fdjsnfd7b592b1a3f',
		'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
	}
};

const getAir = (city) => {

	cityName.innerHTML = city

	fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=' + city, optionss)
		.then(response => response.json())
		.then((response) => {

			console.log(response)


			CO .innerHTML = response.CO.concentration
			NO2.innerHTML = response.NO2.concentration
			O3 .innerHTML = response.O3.concentration
			PM10 .innerHTML = response.PM10.concentration
			SO2 .innerHTML = response.SO2.concentration
			overall_aqi.innerHTML = response.overall_aqi
			
			








		})




		.catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
	e.preventDefault()
	getAir(city.value)
})

getAir("Jaipur")

