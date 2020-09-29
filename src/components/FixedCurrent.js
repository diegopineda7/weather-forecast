import React from 'react'

export default function FixedCurrent({ icon, temp }) {
  return (
    <div className="current shadow">
      <div className="current__icon">
        icon
      </div>
      <div className="current__temp">
        temp<p>ºC</p>
      </div>
    </div>
  )
}
