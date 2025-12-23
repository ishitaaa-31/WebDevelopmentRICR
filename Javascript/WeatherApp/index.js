async function getWeather() {
  const city = document.getElementById("city").value.trim();
  const { lat, lon } = await getGeoLoc(city);
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ca7c5d129722daed8af4c7de207861d2`
  );
  const data = await response.json();
  document.getElementById("weatherDiv").innerHTML = `
   <div>
            <p>Temperature: ${(data.main.temp - 273.14).toFixed(2)}℃</p>
            <p> Humidity: ${data.main.humidity}%</p>
            <p>Descriptiom: ${data.weather[0].description}</p>
          </div>
          <img src=" https://openweathermap.org/img/wn/${
            data.weather[0].icon
          }@2x.png" alt="weather icon" class="w-25 h-25" />
        </div>                                       
  `;
}
async function getGeoLoc(city) {
  console.log(city);
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=ca7c5d129722daed8af4c7de207861d2`
  );
  const data = await response.json();
  const lat = data[0].lat;
  const lon = data[0].lon;
  return { lat, lon };
}
