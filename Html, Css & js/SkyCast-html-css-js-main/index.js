const apikey = "6ee4f048f08b78238e0eb1a2545168e5"
let unit = "metric";
const iconMap = {
  "01d": "sun.png",
  "01n": "cloudy-night.png",
  "02d": "day-cloudy.png",
  "02n": "cloudy-night.png",
  "03d": "cloudy.png",
  "03n": "cloudy.png",
  "04d": "cloudy.png",
  "04n": "cloudy.png",
  "09d": "rain.png",
  "09n": "rain.png",
  "10d": "cloud.png",
  "10n": "nightrain.png",
  "11d": "thunderstorm.png",
  "11n": "thunderstorm.png",
  "13d": "snow.png",
  "13n": "snow.png",
  "50d": "fog.png",
  "50n": "fog.png"
};
const main = document.querySelector(".main");

// On page load, show placeholder and hide main content
window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".main").style.display = "none";
  document.getElementById("search-placeholder").style.display = "block";
});

async function fetchweather() {
  // Hide main content before loading, show placeholder
  document.querySelector(".main").style.display = "none";
  document.getElementById("search-placeholder").style.display = "block";
  const inputval = document.getElementById("input").value;
  localStorage.setItem("inputval", inputval);
  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputval}&appid=${apikey}&units=${unit}`);
  const response = await data.json();
  console.log(response);
  // Show main content after loading, hide placeholder
  document.querySelector(".main").style.display = "flex";
  document.getElementById("search-placeholder").style.display = "none";
  document.getElementById("temp").textContent = `${response.main.temp.toFixed(0)}°C`;
  document.getElementById("feels").textContent = ` ${response.main.feels_like.toFixed(0)}°C`;
  document.getElementById("high").textContent = `${response.main.temp_max.toFixed(1)}°C`;
  document.getElementById("low").textContent = `${response.main.temp_min.toFixed(1)}°C`;
  document.querySelector(".location-name").textContent = `${response.name}`;
  document.getElementById("image").src = iconMap[`${response.weather[0].icon}`] || iconMap["01d"];
  document.getElementById("humidity-measure").textContent = `${response.main.humidity} %`;
  document.getElementById("pressure-measure").textContent = `${response.main.pressure} hPa`;
  document.getElementById("wind-measure").textContent = `${response.wind.speed} m/s`;
  document.getElementById("visibility").textContent = `${response.visibility / 1000} km`;

  // Show main content after loading
  document.querySelector(".main").style.display = "flex";
  const sunrise = new Date(response.sys.sunrise * 1000);
  const sunset = new Date(response.sys.sunset * 1000);

  // Format HH:MM
  const options = { hour: "2-digit", minute: "2-digit" };
  document.getElementById("sunrise").textContent = sunrise.toLocaleTimeString([], options);
  document.getElementById("sunset").textContent = sunset.toLocaleTimeString([], options);

  const data1 = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${inputval}&cnt=40&appid=${apikey}&units=metric`
  );
  const response2 = await data1.json();
  console.log(response2);

  const todayweek = document.querySelector(".days-grid");

  let prevDate = "";


  response2.list.slice(2).forEach(element => {
    const dateStr = element.dt_txt.split(" ")[0];
    if (dateStr === prevDate) return;
    prevDate = dateStr;

    const div = document.createElement("div");
    div.className = "forecast-card"; // class for the card container

    const heading = document.createElement("h3");
    heading.className = "forecast-temp"; // class for the temperature
    heading.textContent = `${element.main.temp.toFixed(0)}°C`;

    const date = document.createElement("p");
    date.className = "forecast-date";

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dateObj = new Date(dateStr);
    const dayOfWeek = days[dateObj.getDay()];

    date.textContent = dayOfWeek;

    const icon = document.createElement("img");
    icon.className = "forecast-icon"; // class for the icon
    icon.src = iconMap[element.weather[0].icon] || iconMap["01d"];
    icon.alt = element.weather[0].description;

    div.appendChild(date);
    div.appendChild(icon);
    div.appendChild(heading);

    todayweek.appendChild(div);
  });


  const map = L.map("weather-map").setView([20, 0], 2);

  // Base map (OpenStreetMap)
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  // Weather overlay layers
  const weatherLayers = {
    "Temperature": L.tileLayer(`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${apikey}`, { opacity: 0.6 }),
    "Clouds": L.tileLayer(`https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${apikey}`, { opacity: 0.6 }),
    "Precipitation": L.tileLayer(`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${apikey}`, { opacity: 0.6 }),
    "Pressure": L.tileLayer(`https://tile.openweathermap.org/map/pressure_new/{z}/{x}/{y}.png?appid=${apikey}`, { opacity: 0.6 }),
    "Wind": L.tileLayer(`https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=${apikey}`, { opacity: 0.6 }),
  };

  // Default layer
  weatherLayers["Temperature"].addTo(map);

  // Layer control
  L.control.layers(weatherLayers).addTo(map);

  // ✅ Show user location on map
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      // Center map & zoom in
      map.setView([lat, lon], 10);

      // Marker for user location
      const marker = L.marker([lat, lon]).addTo(map);

      // Weather fetch for popup
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`
      );
      const weather = await res.json();

      const popupText = `
        <b>📍 Your Location</b><br>
        ${weather.name}<br>
        🌡 ${weather.main.temp.toFixed(0)}°C<br>
        ${weather.weather[0].description}
      `;

      marker.bindPopup(popupText).openPopup();
    }, (error) => {
      console.error("Geolocation error:", error);
      alert("⚠ Location access denied. Please allow location.");
    });
  } else {
    alert("⚠ Geolocation not supported in this browser.");
  }
}
