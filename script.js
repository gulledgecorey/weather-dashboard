var apiKey = "988f4d5b649b65049c5d0dcb76dc8228";
fetch("https://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=988f4d5b649b65049c5d0dcb76dc8228")
.then(res=>res.json())
.then(data=>{
    console.log(data)
})
