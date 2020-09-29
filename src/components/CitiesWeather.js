import React from 'react'

export default function CitiesWeather({ paris, city }) {
  return (
    <div className="cities">
      <div className="city shadow">Paris</div>
      <div className="city shadow">Madrid</div>
      <div className="city city--location shadow">
        Add location
      </div>
    </div>
  )
}
