import React from 'react'
import { iconUrl } from '../services'

export default function Day({ icon, weekDay, weather, minTemp, maxTemp }) {
  return (
    <div className="day shadow">
      <div className='day__icon'>
        <img src={iconUrl(icon)} alt={weather} />
      </div>
      <div className='day__weather'>
        {weekDay}
        {weather}
      </div>
      <div className='day__temps'>
        <p>{maxTemp}</p><p>ºC</p> <p>/ {minTemp}</p><p>ºC</p>
      </div>
    </div>
  )
}
