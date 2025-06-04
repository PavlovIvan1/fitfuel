import React from 'react'
import './ProductSlider.css'

const ProductSlider = ({ products, title }) => {
  return (
    <div>
      <h2 className='sub-title'>{title}</h2>
      <div className="product-slider">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <p className='product-name'>{product.name}</p>
            <div className='price-container'>
              <span className='price'>{product.price} руб</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider; 