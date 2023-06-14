var apiKey = "988f4d5b649b65049c5d0dcb76dc8228";
document.querySelector("button").addEventListener("click", function(e){
    e.preventDefault()

fetch("https://api.openweathermap.org/data/2.5/weather?q="+document.querySelector("input").value+"&appid=988f4d5b649b65049c5d0dcb76dc8228&units=imperial")
.then(res=>res.json())
.then(data=>{
    console.log(data)
    document.querySelector("#date").textContent=data.name + " ("+moment().format("L")+")"
    document.querySelector("#icon").src="http://openweathermap.org/img/w/"+data.weather[0].icon+".png"
    document.querySelector("#temp").textContent="Temp: "+data.main.temp +" °F";
    document.querySelector("#wind").textContent="Wind: "+data.wind.speed +" MPH";
    document.querySelector("#humidity").textContent="Humidity: "+data.main.humidity +" %";
// 5-DAY FORECAST FETCH
fetch("https://api.openweathermap.org/data/2.5/forecast?lat="+data.coord.lat+"&lon="+data.coord.lon+"&appid=988f4d5b649b65049c5d0dcb76dc8228&units=imperial")
.then(res=>res.json())
.then(data=>{
    console.log(data)
    document.querySelector("#date1").textContent=data.list[6].dt_txt.substr(0,10);
    document.querySelector("#icon1").src="http://openweathermap.org/img/w/"+data.list[6].weather[0].icon+".png"
    document.querySelector("#temp1").textContent="Temp: "+data.list[6].main.temp +" °F";
    document.querySelector("#wind1").textContent="Wind: "+data.list[6].wind.speed +" MPH";
    document.querySelector("#humidity1").textContent="Humidity: "+data.list[6].main.humidity +" %";

    document.querySelector("#date2").textContent=data.list[14].dt_txt.substr(0,10);
    document.querySelector("#icon2").src="http://openweathermap.org/img/w/"+data.list[14].weather[0].icon+".png"
    document.querySelector("#temp2").textContent="Temp: "+data.list[14].main.temp +" °F";
    document.querySelector("#wind2").textContent="Wind: "+data.list[14].wind.speed +" MPH";
    document.querySelector("#humidity2").textContent="Humidity: "+data.list[14].main.humidity +" %";

    document.querySelector("#date3").textContent=data.list[22].dt_txt.substr(0,10);
    document.querySelector("#icon3").src="http://openweathermap.org/img/w/"+data.list[22].weather[0].icon+".png"
    document.querySelector("#temp3").textContent="Temp: "+data.list[22].main.temp +" °F";
    document.querySelector("#wind3").textContent="Wind: "+data.list[22].wind.speed +" MPH";
    document.querySelector("#humidity3").textContent="Humidity: "+data.list[22].main.humidity +" %";

    document.querySelector("#date4").textContent=data.list[30].dt_txt.substr(0,10);
    document.querySelector("#icon4").src="http://openweathermap.org/img/w/"+data.list[30].weather[0].icon+".png"
    document.querySelector("#temp4").textContent="Temp: "+data.list[30].main.temp +" °F";
    document.querySelector("#wind4").textContent="Wind: "+data.list[30].wind.speed +" MPH";
    document.querySelector("#humidity4").textContent="Humidity: "+data.list[30].main.humidity +" %";

    document.querySelector("#date5").textContent=data.list[38].dt_txt.substr(0,10);
    document.querySelector("#icon5").src="http://openweathermap.org/img/w/"+data.list[38].weather[0].icon+".png"
    document.querySelector("#temp5").textContent="Temp: "+data.list[38].main.temp +" °F";
    document.querySelector("#wind5").textContent="Wind: "+data.list[38].wind.speed +" MPH";
    document.querySelector("#humidity5").textContent="Humidity: "+data.list[38].main.humidity +" %";






})




})
})