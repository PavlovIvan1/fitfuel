import React, { useState } from 'react'
import './ProductSlider.css'
import UnavailablePopup from './UnavailablePopup'

const ProductSlider = ({ products, title }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <div>
      <h2 className='sub-title'>{title}</h2>
      <div className="product-slider">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <p className='product-name'>{product.name}</p>
            <div className='price-container' onClick={() => setIsPopupOpen(true)}>
              <span className='price'>{product.price} руб</span>
            </div>
          </div>
        ))}
      </div>
      <UnavailablePopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
};

export default ProductSlider; 