import React from 'react'
import { products } from '../data/products'
import ProductSlider from './ProductSlider'

export function Sport() {
	return <ProductSlider products={products.sport} title="Спорт" />;
}