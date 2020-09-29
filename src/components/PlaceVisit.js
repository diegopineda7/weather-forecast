import React from 'react'
import Reviews from './Reviews'

export default function PlaceVisit({ place1, city, place2, place3 }) {
  return (
    <div className='visit'>
      <div className='visit__header'>
        <p><b>Place to</b> visit</p>
        <Reviews />
      </div>
      <div className='content--visit'>
        <div className='visit__city shadow'>
          <p className='visit__name'>
            <p>{place1}</p>
            <p>{city}</p>
          </p>
        </div>
        <div className='visit__secondary'>
          <div className='visit__place'>
            <p className='visit__name'>{place2}</p>
          </div>
          <div className='visit__place'>
            <p className='visit__name'>{place3}</p>
            <button className='visit__plus'>+</button>
          </div>
        </div>
      </div>
    </div>
  )
}
