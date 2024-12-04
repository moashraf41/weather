const btn = document.getElementById("icon");
btn.addEventListener("click", async () => {
  var city = document.getElementById("search").value;
  if (city) {
    try {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b8431e67519c27dde58c39cc5df6b37e`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();

      document.getElementById("temperature").innerHTML = `
        <h1>${data.main.temp}°C</h1>
        <h2>${data.name}</h2>
      `;

      document.getElementById("humidity").innerHTML = `
        <div class="d-flex gap-2 align-items-center">
          <img src="images/humidity-3d-render-icon-illustration-png.png" alt="" class="w-25" />
          <div class="text">
            <h4>${data.main.humidity}%</h4>
            <p>Humidity</p>
          </div>
        </div>
        <div class="d-flex gap-2 align-items-center">
          <img src="images/3d-cartoon-weather-icon-snow-clouds-and-snowflakes-sign-isolated-on-transparent-background-3d-render-illustration-png.png" alt="" class="w-25" />
          <div class="text">
            <h4>${data.wind.speed} km/h</h4>
            <p>Wind Speed</p>
          </div>
        </div>
      `;

      document.getElementById("weather").innerHTML = `
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" style="width: 120px" alt="${data.weather[0].description}" />
      `;
    } catch (error) {
      console.error(error);
      alert("Error fetching data. Please try again.");
    }
  } else {
    alert("Please enter a city name.");
  }
});
