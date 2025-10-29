
import type { GeocodingResponse, WeatherResponse } from '../types';

const GEOCODING_API_URL = 'https://geocoding-api.open-meteo.com/v1/search';
const WEATHER_API_URL = 'https://api.open-meteo.com/v1/forecast';
const REVERSE_GEOCODING_API_URL = 'https://api.bigdatacloud.net/data/reverse-geocode-client';


export const getCoordinatesForCity = async (city: string) => {
  const response = await fetch(`${GEOCODING_API_URL}?name=${encodeURIComponent(city)}&count=1`);
  if (!response.ok) {
    throw new Error('Failed to fetch coordinates.');
  }
  const data: GeocodingResponse = await response.json();
  return data.results?.[0];
};

export const getCityFromCoordinates = async (latitude: number, longitude: number) => {
    const response = await fetch(`${REVERSE_GEOCODING_API_URL}?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
    if (!response.ok) {
        throw new Error('Failed to fetch city name.');
    }
    const data = await response.json();
    return data.city || data.locality || 'Your Location';
}

export const getWeatherForCoordinates = async (latitude: number, longitude: number): Promise<WeatherResponse> => {
  const params = new URLSearchParams({
    latitude: latitude.toString(),
    longitude: longitude.toString(),
    current: 'temperature_2m,weather_code,wind_speed_10m',
    wind_speed_unit: 'mph',
    timezone: 'auto'
  });
  const response = await fetch(`${WEATHER_API_URL}?${params.toString()}`);
  if (!response.ok) {
    throw new Error('Failed to fetch weather data.');
  }
  return response.json();
};
