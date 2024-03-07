import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserWeather = ({ lat, lon }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (lat && lon) {
      const API_KEY = '00f6c53093d6492dbf14c4c0f8807c8c';
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

      axios.get(URL)
        .then(response => {
          setWeatherData(response.data);
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
        });
    }
  }, [lat, lon]);

  if (!weatherData) return <p>Loading...</p>;

  return (
    <div>
      <h2>Weather in {weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp} °C</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Description: {weatherData.weather[0].description}</p>
    </div>
  );
};

export default UserWeather;
