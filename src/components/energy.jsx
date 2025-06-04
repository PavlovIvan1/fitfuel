import React, { useState } from 'react'
import UnavailablePopup from './UnavailablePopup'

export function Energy() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div>
      <h2 className='sub-title'>Энергия</h2>
			<div className='energy-container'>
				<div>
					<img src='./image.png' alt="energy" />
					<p className='product-name'>Л-Теанин</p>
					<div className='price-container' onClick={() => setIsPopupOpen(true)}>
						<span className='price'>699 руб</span>
					</div>
				</div>
				<div>
					<img src='./image1.png' alt="energy" />
					<p className='product-name'>Кофеин</p>
					<div className='price-container' onClick={() => setIsPopupOpen(true)}>
						<span className='price'>699 руб</span>
					</div>
				</div>
			</div>
      <UnavailablePopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  )
}