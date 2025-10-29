
import React from 'react';
import type { WeatherData } from '../types';
import { WeatherIcon } from './WeatherIcon';

interface WeatherDisplayProps {
  data: WeatherData;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ data }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-md rounded-xl shadow-2xl p-6 md:p-8 text-white w-full max-w-md animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold">{data.city}</h2>
        <p className="text-slate-400">{data.country}</p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-around my-6">
        <div className="text-center">
          <WeatherIcon code={data.weatherCode} className="w-32 h-32 text-cyan-400" />
        </div>
        <div className="text-center my-4 md:my-0">
          <p className="text-7xl font-thin tracking-tighter">
            {Math.round(data.temperature)}<span className="align-top text-4xl">&deg;C</span>
          </p>
        </div>
      </div>
      <div className="flex justify-around bg-slate-900/50 rounded-lg p-4 mt-4 text-center">
        <div>
          <p className="text-slate-400 text-sm">Wind</p>
          <p className="text-lg font-semibold">{data.windSpeed.toFixed(1)} mph</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
