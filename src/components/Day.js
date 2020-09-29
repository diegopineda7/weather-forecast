import React from 'react'

export default function Day({ icon, weekDay, weather, minTemp, maxTemp }) {
  const iconUrl = `http://openweathermap.org/img/w/${icon}.png`
  return (
    <div className="day shadow">
      <div className='day__icon'>
        <img src={iconUrl} alt={weather} />
      </div>
      <div className='day__weather'>
        {weekDay}
        {weather}
      </div>
      <div className='day__temps'>
        {maxTemp} / {minTemp}
      </div>
    </div>
  )
}
