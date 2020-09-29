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
            <p>{parseInt(temp)}</p><p className='degrees'>ºC</p>
          </div>
          <div className='city__name'>
            <p className='city__city'>{name.split(' ').pop()}</p>
            <p className='city__country'>{country}</p>
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
