import React from 'react'
import { iconUrl } from '../services'

export default function FixedCurrent({ icon, weather, temp }) {
  return (
    <div className='current shadow'>
      <div className='current__icon'>
        <img
          src={iconUrl(icon)}
          alt={weather}
          className='res-icon'
        />
        <p>{weather}</p>
      </div>
      <div className='current__temp'>
        <p><b>{temp}</b></p><p className='degrees'>ºC</p>
      </div>
    </div >
  )
}
