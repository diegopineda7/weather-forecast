import React from 'react'
import { iconUrl } from '../services'

export default function FixedCurrent({ icon, weather, temp }) {
  return (
    <div className='current shadow--bold'>
      <div className='current__icon'>
        <img
          src={iconUrl(icon)}
          alt={weather}
          className='res-icon'
        />
        <p>{weather}</p>
      </div>
      <div className='current__temp'>
        <article className='fixed__temp'>
          <p>{parseInt(temp)}</p>
          <p className='degrees'>ºC</p>
        </article>
      </div>
    </div >
  )
}
