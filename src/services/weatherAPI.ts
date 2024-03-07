// src/services/weatherAPI.ts
import axios from 'axios';

const API_KEY = '00f6c53093d6492dbf14c4c0f8807c8c';

const baseURL = 'https://api.openweathermap.org/data/2.5';

const weatherAPI = axios.create({
  baseURL,
});

export const fetchWeather = async (city: string) => {
  try {
    const response = await weatherAPI.get('/weather', {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default weatherAPI;
