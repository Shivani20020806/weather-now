
import React from 'react';

interface WeatherIconProps {
  code: number;
  className?: string;
}

export const WeatherIcon: React.FC<WeatherIconProps> = ({ code, className = 'w-24 h-24' }) => {
  const getIcon = () => {
    if (code === 0) {
      return ( // Sun
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      );
    }
    if ([1, 2].includes(code)) {
      return ( // Sun behind cloud
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.5 4.5 0 002.25 15z" />
        </svg>
      );
    }
    if ([3, 45, 48].includes(code)) {
      return ( // Cloud
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.5 4.5 0 002.25 15z" />
        </svg>
      );
    }
    if (code >= 51 && code <= 67 || code >= 80 && code <= 82) {
      return ( // Cloud with rain
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 8.25l.75-.75 3 3 .75-.75-3-3z" fill="currentColor" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75h.008v.008H12v-.008z" fill="currentColor" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5h.008v.008H12v-.008z" fill="currentColor" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 15h.008v.008h-.008v-.008z" fill="currentColor" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 15h.008v.008H9.75v-.008z" fill="currentColor" />
        </svg>
      );
    }
     if (code >= 71 && code <= 77) {
      return ( // Snow
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25v19.5m-4.243-4.243L12 12.007l4.243 4.243m-8.486-8.486L12 12.007l4.243-4.243" />
        </svg>
      );
    }
    if (code >= 95 && code <= 99) {
      return ( // Bolt
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      );
    }

    return ( // Default to cloud
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.5 4.5 0 002.25 15z" />
        </svg>
      );
  };
  
  const getWeatherDescription = () => {
    if (code === 0) return "Clear sky";
    if (code === 1) return "Mainly clear";
    if (code === 2) return "Partly cloudy";
    if (code === 3) return "Overcast";
    if (code === 45 || code === 48) return "Fog";
    if (code >= 51 && code <= 55) return "Drizzle";
    if (code >= 61 && code <= 65) return "Rain";
    if (code >= 66 && code <= 67) return "Freezing Rain";
    if (code >= 71 && code <= 75) return "Snow fall";
    if (code === 77) return "Snow grains";
    if (code >= 80 && code <= 82) return "Rain showers";
    if (code >= 85 && code <= 86) return "Snow showers";
    if (code === 95) return "Thunderstorm";
    if (code >= 96 && code <= 99) return "Thunderstorm with hail";
    return "Unknown";
  }

  return (
    <div className="flex flex-col items-center justify-center">
      {getIcon()}
      <p className="mt-4 text-xl text-slate-300 capitalize">{getWeatherDescription()}</p>
    </div>
  );
};
