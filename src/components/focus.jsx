import React from 'react'
import { products } from '../data/products'
import ProductSlider from './ProductSlider'

export function Focus() {
	return <ProductSlider products={products.focus} title="Фокус" />;
}