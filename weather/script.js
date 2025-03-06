let fetch1 = document.getElementById("fetch");
let lat;
let lon;
let json;

fetch1.addEventListener("click", async () => {
  let userLocation = document.getElementById("location").value.trim();
  const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
    userLocation
  )}&limit=1&appid=00ff0f2de262c5ceb59224e9826f80e2`;

  console.log("Fetching Geo Data:", geoUrl);

  await getLatLon(geoUrl); // Wait for lat & lon to be set

  if (lat !== undefined && lon !== undefined) {
    // Ensure lat/lon exist
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=00ff0f2de262c5ceb59224e9826f80e2&units=imperial`;
    console.log("Fetching Weather Data:", weatherUrl);

    await getWeatherData(weatherUrl);
    //    console.log("JSON:", json)
    //    console.log("Description:", json.weather[0].description)
    //    console.log("Temperature:", json.main.temp)
    //    console.log("Feel's like:", json.main.feels_like)
    //    console.log("Humidity:", json.main.humidity)
    //    console.log("Location name:", json.name)
  } else {
    console.error("Location not found or invalid!");
  }
  document.getElementById("display").style.display = "block";

  let locationName = document.getElementById("locatName");
  let userInput = document
    .getElementById("location")
    .value.trim()
    .toUpperCase();
  locationName.innerText = "";
  locationName.innerText = userInput;

  let temperature = document.getElementById("tempData");
  temperature.innerText = "";
  temperature.innerText = json.main.temp;

  let humidity = document.getElementById("humidityData");
  humidity.innerText = "";
  humidity.innerText = json.main.humidity;

  let feel = document.getElementById("feelData");
  feel.innerText = "";
  feel.innerText = json.main.feels_like;

  let description = document.getElementById("descData");
  description.innerText = "";
  description.innerText = json.weather[0].description;
});


async function getLatLon(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    if (json.length === 0) {
      throw new Error("Invalid location!");
    }

    lat = json[0].lat;
    lon = json[0].lon;
    console.log(`Latitude: ${lat}, Longitude: ${lon}`);
  } catch (error) {
    console.error("Error fetching latitude & longitude:", error.message);
  }
}


async function getWeatherData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    json = await response.json();
    console.log("Weather Data:", json);
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
  }
}

// ([your data] − 32) × 5/9 = 0°C