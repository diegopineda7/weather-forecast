import React from 'react'
import Reviews from './Reviews'

export default function PlaceVisit({ place1, city, place2, place3 }) {
  return (
    <div className='visit'>
      <div className='header'>
        <b>Place to</b> visit
        <Reviews />
      </div>
      <div className='content--visit'>
        <div className='visit__city'>
          <p>{place}</p>
          <p>{city}</p>
        </div>
        <div className='visit__secondary'>
          <div className='visit__place'>
            <p>{place2}</p>
          </div>
          <div className='visit__place'>
            <p>{place3}</p>
            <button className='visit__plus'>+</button>
          </div>
        </div>
      </div>
    </div>
  )
}
