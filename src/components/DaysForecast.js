import React from 'react'
import Day from './Day'

export default function DaysForecast() {
  return (
    <div className="days">
      <div className="header">
        <b>3 Days</b> Forecast
      </div>
      <div className="content--days">
        <Day />
        <Day />
        <Day />
      </div>
    </div>
  )
}
