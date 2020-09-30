import React from 'react'

export default function Reviews() {
  const defaultImg = 'https://cdn.onlinewebfonts.com/svg/img_56724.png'

  return (
    <div className='reviews'>
      <div className='reviews__header'>
        <p>+</p>
        <p>Top Reviews</p>
      </div>
      <div className='reviews__photos'>
        <div className='reviews__item'>
          <img src={defaultImg} alt='Review' className='review__photo' />
        </div>
        <div className='reviews__item'>
          <img src={defaultImg} alt='Review' className='review__photo' />
        </div>
        <div className='reviews__item'>
          <img src={defaultImg} alt='Review' className='review__photo' />
        </div>
        <div className='reviews__item reviews__item--count'>
          <p>9+</p>
        </div>
      </div>
    </div>
  )
}
