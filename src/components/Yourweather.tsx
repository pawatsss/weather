import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './detail.css';

const YourDetailPage: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        // Get user's current location
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          const apiKey = '00f6c53093d6492dbf14c4c0f8807c8c';
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`);
          const data = await response.json();
          setWeatherData(data);
          setLoading(false);
        });
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  if (loading) {
    return <div className='loading'>Loading...</div>;
  }

  return (
    // JSX
    <div className="weather-details">
      <h2 className="c">Current Location</h2>
      <Link to="/" className='button'>Go to home page</Link>
      <div className='box'>
        <div className='chbox'>
          <p>{weatherData.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
            alt={weatherData.weather[0].description}
            className="cloud-image"
          />
          <p className='c'>{weatherData.main.temp}°C</p>
        </div>
        <div className='cbox2'>
          <p>MAX {weatherData.main.temp_max}°C</p>
          <p>MIN {weatherData.main.temp_min}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default YourDetailPage;
