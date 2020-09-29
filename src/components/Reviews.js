import React from 'react'

export default function Reviews() {
  return (
    <div className='reviews'>
      <div className='reviews__header'>
        <p>+</p>
        <p>Top Reviews</p>
      </div>
      <div className='reviews__photos'>
        <div className='reviews__item'>
          <img alt='Review' />
        </div>
        <div className='reviews__item'>
          <img alt='Review' />
        </div>
        <div className='reviews__item'>
          <img alt='Review' />
        </div>
        <div className='reviews__item'>
          <p>9+</p>
        </div>
      </div>
    </div>
  )
}
