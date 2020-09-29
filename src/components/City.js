import React from 'react'

export default function City({ icon, weather, temp, cityName, country, humidity, windDir, winsSpeed }) {
  const iconUrl = `http://openweathermap.org/img/w/${icon}.png`

  return (
    <div className="city shadow">
      <div className='city__icon'>
        <img src={iconUrl} alt={weather} />
      </div>
      <div className='city__info'>
        <div className='city__temp'>
          <p>{temp}</p><p>ºC</p>
        </div>
        <div className='city__name'>
          {cityName}
          {country}
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
