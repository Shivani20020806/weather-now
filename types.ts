
export interface GeocodingResult {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  country: string;
}

export interface GeocodingResponse {
  results: GeocodingResult[];
}

export interface WeatherResponse {
  latitude: number;
  longitude: number;
  current: {
    time: string;
    temperature_2m: number;
    weather_code: number;
    wind_speed_10m: number;
  };
}

export interface WeatherData {
  city: string;
  country: string;
  temperature: number;
  weatherCode: number;
  windSpeed: number;
}
