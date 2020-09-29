import 'moment-timezone'
import React from 'react'
import Moment from 'react-moment'
import { iconUrl } from '../services'

export default function Day({ dayForecast, next }) {
  const { dt } = dayForecast
  const { min, max } = dayForecast.temp
  const { icon, main } = dayForecast.weather[0]

  const classWeather = next ? 'day__temps--next' : ''

  return (
    <div className='day shadow'>
      <div className='day__icon'>
        <img src={iconUrl(icon)} alt={main} />
      </div>
      <div className='day__weather'>
        <p className='day__week-day'>
          <Moment
            date={new Date(dt * 1000)}
            format='dddd'
          />
        </p>
        <p className='day__weather-day'>{main}</p>
      </div>
      <div className={`day__temps ${classWeather}`}>
        <p>{parseInt(max)}</p><p className='degrees'>º</p>
        <pre> / </pre>
        <p>{parseInt(min)}</p><p className='degrees'>º</p>
      </div>
    </div>
  )
}
