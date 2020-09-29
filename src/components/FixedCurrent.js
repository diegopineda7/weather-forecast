import React from 'react'
import { iconUrl } from '../services'

export default function FixedCurrent({ icon, temp, weather }) {
  return (
    <div className='current shadow'>
      <div className='current__icon'>
        <img src={iconUrl(icon)} alt={weather} />
        <p>{weather}</p>
      </div>
      <div className='current__temp'>
        <p>{temp}</p><p className='degrees'>ºC</p>
      </div>
    </div >
  )
}
