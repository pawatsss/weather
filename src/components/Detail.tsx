// src/components/DetailPage.tsx
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './detail.css';

const DetailPage: React.FC = () => {
  const { city } = useParams<{ city: string }>(); // รับชื่อเมืองจาก URL parameter

  const [weatherData, setWeatherData] = useState<any>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = '00f6c53093d6492dbf14c4c0f8807c8c';
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [city]);
  console.log(weatherData);

  if (!weatherData) {
    return <div className='loading'>Loading...</div>;
  } else if (weatherData.cod === "404") {
    return <div><Link to="/" className='notfound'>Go to home page</Link>
      <div className='loading'>City not found</div>;</div>
  } else {
    // Render weather data UI here
  }

  return (
    // JSX
    <div className="weather-details">
      <h2 className="c">{city}</h2>
      <Link to="/" className='button'>Go to home page</Link>
      <div className='box'>
        <div className='chbox'>
          <p>{weatherData.weather[0].description}</p>
          <img
            src={
              weatherData.weather[0].description === 'few clouds'
                ? 'https://i.pinimg.com/564x/d3/c2/03/d3c203352b5c16c9da65f5daa4c9c9ef.jpg'
                : weatherData.weather[0].description === 'clear sky'
                  ? 'https://i.pinimg.com/564x/f2/84/c5/f284c5a15c983ad1cf564b120a920e53.jpg'
                  : weatherData.weather[0].description === 'scattered clouds'
                    ? 'https://i.pinimg.com/564x/1d/d0/f9/1dd0f9e88b4647bb5c22598401e4e0dc.jpg'
                    : weatherData.weather[0].description === 'broken clouds'
                      ? 'https://i.pinimg.com/564x/1d/d0/f9/1dd0f9e88b4647bb5c22598401e4e0dc.jpg'
                      : weatherData.weather[0].description === 'shower rain'
                        ? 'https://i.pinimg.com/564x/d4/f0/02/d4f0020e48eae0cc0101b735c08ce7ad.jpg'
                        : weatherData.weather[0].description === 'rain'
                          ? 'https://i.pinimg.com/564x/78/93/ad/7893ad60f6b6b880513297f3ed5b2b91.jpg'
                          : weatherData.weather[0].description === 'thunderstorm'
                            ? 'https://i.pinimg.com/564x/9e/b7/64/9eb764cd8205f88068599636d1f22110.jpg'
                            : weatherData.weather[0].description === 'snow'
                              ? 'https://i.pinimg.com/564x/ea/59/fd/ea59fdc60e60d62cc77e3366b525f4c9.jpg'
                              : weatherData.weather[0].description === 'mist'
                                ? ''
                                : ''
            }
            alt="Cloud"
            className="cloud-image"
          />
          <p className='c'>{weatherData.main.temp}°C</p>
        </div>
        <div className='cbox2'>
          <p>MAX{weatherData.main.temp_max}°C</p>
          <p>MIN{weatherData.main.temp_min}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      </div>
    </div>

  );
};

export default DetailPage;
