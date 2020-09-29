import React from 'react'
import { iconUrl } from '../services'

export default function Day({ icon, weekDay, weather, minTemp, maxTemp }) {
  return (
    <div className='day shadow'>
      <div className='day__icon'>
        <img src={iconUrl(icon)} alt={weather} />
      </div>
      <div className='day__weather'>
        <p>{weekDay}</p>
        <p>{weather}</p>
      </div>
      <div className='day__temps'>
        <p>{maxTemp}</p><p className='degrees'>ºC</p> <p>/ {minTemp}</p><p className='degrees'>ºC</p>
      </div>
    </div>
  )
}
