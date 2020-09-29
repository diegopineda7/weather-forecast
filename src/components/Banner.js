import React from 'react'

export default function Banner({ cityName }) {
  return (
    <div className="app__banner">
      <div className="city-name">
        {cityName}
      </div>
    </div>
  )
}
