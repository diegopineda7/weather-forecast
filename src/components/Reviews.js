import React from 'react'
import person from '../person.png'

export default function Reviews() {
  return (
    <div className='reviews'>
      <div className='reviews__header'>
        <p>+</p>
        <p>Top Reviews</p>
      </div>
      <div className='reviews__photos'>
        <div className='reviews__item'>
          <img src={person} alt='Review' className='review__photo' />
        </div>
        <div className='reviews__item'>
          <img src={person} alt='Review' className='review__photo' />
        </div>
        <div className='reviews__item'>
          <img src={person} alt='Review' className='review__photo' />
        </div>
        <div className='reviews__item reviews__item--count'>
          <p>9+</p>
        </div>
      </div>
    </div>
  )
}
