import React, { useState } from "react";
import axios from "axios";


export default function WeatherSearch(props) {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [weather, setWeather] = useState({});

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      Description: response.data.weather[0].description,
      Wind: response.data.wind.speed,
      Humidity: response.data.main.Humidity,
      Icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
    setTemperature(response.data.main.temp);
    console.log(response.data.main.temp);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCity(city);
    let apiKey = "49b631c45785fe73d2a88477803dea22";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Type a city" onChange={updateCity} />
        <button type="submit">search</button>
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div className="App">
        {form}
        <ul>
          <li>weather {Math.round(weather.temperature)}°C</li>
          <li>Description:{weather.Description}°C</li>
          <li>Humidity{weather.temperature}°C</li>
          <li>Wind{weather.temperature}°C</li>
          <li>
            <img src={weather.Icon} alt="weather icon" />

          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
