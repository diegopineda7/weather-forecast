import React from 'react'
import Day from './Day'

export default function DaysForecast({ forecast }) {
  return (
    <div className='days'>
      <div className='header'>
        <b>3 Days</b> Forecast
      </div>
      <div className='content--days'>
        <Day dayForecast={forecast.daily[1]} next />
        <Day dayForecast={forecast.daily[2]} />
        <Day dayForecast={forecast.daily[3]} />
      </div>
    </div>
  )
}
