import React from 'react'
import Product from '../Product'

import styles from './styles.scss'

export default ({ products, prevItemCount }) => {

  return <div className='ti-products'>
    { products.data && products.data.map((product, index) => 
      <Product 
        key={index}
        index={index}
        product={product} 
        prevItemCount={prevItemCount}
      />) 
    }
  </div>
} 