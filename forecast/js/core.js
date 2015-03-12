function startTime() {
	var today=new Date();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();

	m=checkTime(m);
	s=checkTime(s);
	document.getElementById('clock').innerHTML=h+":"+m+":"+s;
	t=setTimeout(function(){startTime()},500);
};

function checkTime(i){
	if (i<10){
		i="0" + i;
	}
	return i;
};

function setWeather(data){
	var path = "weather-icons/";
	var icon = "";
	document.getElementById('temp').innerHTML = data.main.temp + " C&deg;";
	document.getElementById('humidity').innerHTML = data.main.humidity + "%";
	document.getElementById('pressure').innerHTML = data.main.pressure + " hPa";
	document.getElementById('wind_speed').innerHTML = data.wind.speed + " м/с";
	document.getElementById('clouds').innerHTML = data.clouds.all + " %";
	document.getElementById('city_name').innerHTML = data.name;
	
	var icon_id = data.weather[0].icon;
	
	switch(icon_id){
		case("11d"):
		icon = "storm";
		break;
		case("09d"):
		icon = "heavy"
		break;
		case("10d"):
		icon = "heavy"
		break;
		case("13d"):
		icon = "snow"
		break;
		case("50d"):
		icon = "fog"
		break;
		case("01d"):
		icon = "sunny"
		break;
		case("03d"):
		icon = "overcast"
		break;
		case("04d"):
		icon = "overcast"
		break;
		//for night weather
		case("11n"):
		icon = "storm";
		break;
		case("09n"):
		icon = "heavy"
		break;
		case("10n"):
		icon = "heavy"
		break;
		case("13n"):
		icon = "snow"
		break;
		case("50n"):
		icon = "fog"
		break;
		case("01n"):
		icon = "sunny"
		break;
		case("03n"):
		icon = "overcast"
		break;
		case("04n"):
		icon = "overcast"
		break;
	}
	
	$('#weather-icon').css({"background": "url("+path+icon+".png) no-repeat center"});
};

function getWeather(){
	var url = "http://api.openweathermap.org/data/2.5/weather?q=Beirut,LB&lang=RU&units=metric&callback=test";
	
	$.ajax({
		url:url,
		type: 'GET',
		dataType: "jsonp",
		contentType: "application/json ",
		success: function(data){
			setWeather(data);
		},
		error: function(){alert("Ошибка при получении погоды!")}
	}); 
};
