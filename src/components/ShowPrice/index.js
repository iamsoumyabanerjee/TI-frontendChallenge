import React from 'react'

import styles from './styles.scss'

const ItemPrice = ({ price, finalPrice }) => {
  return (
    <div className={`price-container ${price !== finalPrice ? 'price-sale' : ''}`}>
      <span className='actual-price'>${price}</span>
      { price !== finalPrice && <span className='sale-price'>${finalPrice}</span> }
    </div>
  )
} 

export default ItemPrice