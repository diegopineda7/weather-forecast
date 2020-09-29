import React from 'react'
import LocationIcon from './LocationIcon'
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
          <article className='visit__location'>
            <LocationIcon />
            <article className='visit__name'>
              <p>{place1}</p>
              <p>{city}</p>
            </article>
          </article>
        </div>
        <div className='visit__secondary'>
          <div className='visit__place visit__place--place2'>
            <article className='visit__location'>
              <LocationIcon />
              <p className='visit__name'>
                {place2}
              </p>
            </article>
          </div>
          <div className='visit__place visit__place--place3'>
            <article className='visit__location'>
              <LocationIcon />
              <p className='visit__name'>
                {place3}
              </p>
            </article>
            <button className='visit__plus'>+</button>
          </div>
        </div>
      </div>
    </div>
  )
}
