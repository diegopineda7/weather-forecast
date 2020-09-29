import React from 'react'
import { iconUrl } from '../services'

export default function City({ icon, weather, temp, cityName, country, humidity, windDir, winsSpeed }) {
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
            <p>{cityName}</p>
            <p>{country}</p>
          </div>
        </div>
      </div>
      <div className='city__weather'>
        <p>Humidity: {humidity}%</p>
        <p>{windDir}</p>
        <p>{winsSpeed}km/h</p>
      </div>
    </div>
  )
}