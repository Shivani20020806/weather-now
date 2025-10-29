
import React, { useState, useEffect, useCallback } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import type { WeatherData } from './types';
import { getCoordinatesForCity, getWeatherForCoordinates, getCityFromCoordinates } from './services/weatherService';

const App: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const fetchWeather = useCallback(async (location: { city: string } | { lat: number; lon: number }) => {
    setIsLoading(true);
    setError(null);
    setWeatherData(null);

    try {
      let lat: number, lon: number, city: string, country: string;

      if ('city' in location) {
        const geoData = await getCoordinatesForCity(location.city);
        if (!geoData) {
          throw new Error(`Could not find city: ${location.city}. Please try again.`);
        }
        lat = geoData.latitude;
        lon = geoData.longitude;
        city = geoData.name;
        country = geoData.country;
      } else {
        lat = location.lat;
        lon = location.lon;
        city = await getCityFromCoordinates(lat, lon);
        country = ''; // Reverse geocoding doesn't always provide this
      }

      const weatherApiResponse = await getWeatherForCoordinates(lat, lon);
      
      setWeatherData({
        city,
        country,
        temperature: weatherApiResponse.current.temperature_2m,
        weatherCode: weatherApiResponse.current.weather_code,
        windSpeed: weatherApiResponse.current.wind_speed_10m,
      });

    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  }, []);
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetchWeather({ lat: position.coords.latitude, lon: position.coords.longitude });
      },
      (geoError) => {
        console.warn('Geolocation denied or unavailable, defaulting to a sample city.', geoError);
        // Fallback to a default city if geolocation fails
        fetchWeather({ city: 'New York' });
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchWeather]);

  const handleSearch = (city: string) => {
    fetchWeather({ city });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4 selection:bg-cyan-500/30">
        <div className="w-full max-w-md space-y-6">
            <header className="text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                    Weather Now
                </h1>
                <p className="text-slate-400 mt-2">Your real-time weather companion</p>
            </header>
            
            <main className="w-full">
                <SearchBar onSearch={handleSearch} isLoading={isLoading} />
                <div className="mt-6 min-h-[350px] flex items-center justify-center">
                    {isLoading && <LoadingSpinner />}
                    {error && <ErrorMessage message={error} />}
                    {weatherData && <WeatherDisplay data={weatherData} />}
                </div>
            </main>
             <footer className="text-center text-slate-500 text-sm">
                <p>Weather data provided by Open-Meteo.</p>
            </footer>
        </div>
    </div>
  );
};

export default App;
