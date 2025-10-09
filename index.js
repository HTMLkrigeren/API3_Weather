let event = document.getElementById("sok").addEventListener('keydown', (event) => {
    let sok = document.getElementById("sok")
    let value = sok.value;

    let cityName = value;
    let countryCode = "No"
    let APIKey = "19a7ba11e9b45ff30e4fa735ac06e1f6"
    let API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=${APIKey}`

    let container = document.getElementById("container");

    let weatherDiv = document.createElement("div");
    let append = document.getElementById("append")

    if (event.key === 'Enter') {
        append.innerHTML = "";
        fetch(API)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                let cityName = data.name;
                console.log(cityName);

                const name = document.createElement("p");
                name.innerText = cityName + ", " + countryCode;
                weatherDiv.appendChild(name);
                

                let temp = Math.round(data.main.temp - 273.15);
                console.log(temp);

                const tempratur = document.createElement("p");
                tempratur.innerText = temp + " ℃";
                weatherDiv.appendChild(tempratur);

                let weatherDesc = data.weather[0].description;
                console.log(weatherDesc); 

                const weather = document.createElement("p");
                weather.innerText = weatherDesc;
                weatherDiv.appendChild(weather);
                
                let maxTemp = Math.round(data.main.temp_max - 273.15);
                console.log(maxTemp);

                let minTemp = Math.round(data.main.temp_min - 273.15);
                console.log(minTemp);

                const maxOgMin = document.createElement("p");
                maxOgMin.innerText = "max: " + maxTemp + " ℃ / min: " + minTemp;
                weatherDiv.appendChild(maxOgMin);



                let tekstFoler = "Føles ut som"
                console.log(tekstFoler);
                

                const tekstFolesUt = document.createElement("p");
                tekstFolesUt.innerText = tekstFoler;
                weatherDiv.appendChild(tekstFolesUt);

                let folesUt = Math.round(data.main.feels_like - 273.15);
                console.log(folesUt);

                const foles = document.createElement("p");
                foles.innerText = folesUt + " ℃";
                weatherDiv.appendChild(foles);
                
                append.appendChild(weatherDiv);
            })
    }
});


