import React from 'react'

import ShowPrice from '../ShowPrice'
import { ITEM_TYPE_NEW } from '../../utils/constants'
import NewArrivals from '../../icons/newArrivals'
import styles from './styles.scss'

const Product = ({ product, index, prevItemCount }) => {
  const { _embedded: { images, brand }, name, price, final_price, link, ribbon } = product
  const setStyle = (count, prevItemCount) => {
    const style = {}
    if (prevItemCount - 1 > count) {
      return style
    } 
    style.animationDelay = count - (prevItemCount - 1) * 200 + 'ms'
    
    return style
  }

  return (<div className='product-wrapper'>
    <div className='container' style={setStyle(index, prevItemCount)} onAnimationEnd={e=> e.target.style.opacity=1}>
      <a className='product-item' href={`https://www.theiconic.com.au/${link}`}>
        <span className='product-image'><img src={images[0].url} alt={name} /></span>
        <div className='short-details'>
          { ribbon && ribbon.toUpperCase() == ITEM_TYPE_NEW ? <NewArrivals styleClas='new-arrival-icon' /> : null }
          <span className='brand'>{brand.name}</span>
          <span className='name'>{name}</span>
          <ShowPrice price={price} finalPrice={final_price} />
        </div>
      </a>  
    </div>
  </div>)
}

export default Product