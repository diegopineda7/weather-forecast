import 'moment-timezone'
import React from 'react'
import Moment from 'react-moment'
import { iconUrl } from '../services'

export default function Day({ dayForecast }) {
  const { dt } = dayForecast
  const { min, max } = dayForecast.temp
  const { icon, main } = dayForecast.weather[0]

  return (
    <div className='day shadow'>
      <div className='day__icon'>
        <img src={iconUrl(icon)} alt={main} />
      </div>
      <div className='day__weather'>
        <p>
          <Moment
            date={new Date(dt * 1000)}
            format='dddd'
          />
        </p>
        <p>{main}</p>
      </div>
      <div className='day__temps'>
        <p>{parseInt(max)}</p><p className='degrees'>ºC</p> <p>/ {parseInt(min)}</p><p className='degrees'>ºC</p>
      </div>
    </div>
  )
}
