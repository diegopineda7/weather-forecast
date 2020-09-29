import React from 'react';
import { iconUrl } from '../services';

export default function City({ weather, country }) {
  const { icon } = weather.weather[0];
  const { temp, humidity } = weather.main;
  const { speed, deg } = weather.wind;
  const { name } = weather;
  return (
    <div className="city shadow">
      <div className='city__top'>
        <div className='city__icon'>
          <img src={iconUrl(icon)} alt={weather} />
        </div>
        <div className='city__info'>
          <div className='city__temp'>
            <p>{temp}</p><p className='degrees'>ºC</p>
          </div>
          <div className='city__name'>
            <p>{name}</p>
            <p>{country}</p>
          </div>
        </div>
      </div>
      <div className='city__weather'>
        <p>Humidity: {humidity}%</p>
        <p>{deg}</p>
        <p>{speed}km/h</p>
      </div>
    </div>
  )
}
