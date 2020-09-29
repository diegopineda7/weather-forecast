import React from 'react'
import LocationIcon from './LocationIcon'

export default function Banner({ cityName }) {
  return (
    <div className="app__banner">
      <div className="city-name">
        <LocationIcon /> {cityName}
      </div>
    </div>
  )
}
