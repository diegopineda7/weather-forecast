import React from 'react'
import City from './City'

export default function CitiesWeather({ paris, city }) {
  return (
    <div className='cities'>
      <City
        weather={paris}
        country='France'
      />
      <City
        weather={city}
        country='France'
      />
      <div className='city cities--location shadow'>
        <div className='cities__button'>
          <button className='add-location'>Add Locations</button>
        </div>
        <img
          src={'s'}
          alt={'weather'}
          className='location__img'
        />
      </div>
    </div>
  )
}
