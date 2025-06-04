import React, { useState } from 'react'
import { products } from '../data/products'
import ProductSlider from './ProductSlider'
import UnavailablePopup from './UnavailablePopup'

export function Energy() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <ProductSlider products={products.energy} title="Энергия" />
      <UnavailablePopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  )
}