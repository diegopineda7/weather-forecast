import React from 'react'
import City from './City'

export default function CitiesWeather({ paris, city }) {
  return (
    <div className="cities">
      <City />
      <City />
      <div className="city city--location shadow">
        Add location
      </div>
    </div>
  )
}
