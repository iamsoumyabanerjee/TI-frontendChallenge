import React, { useState } from 'react'

import DisplayController from '../components/DisplayController'
import UseSearch from '../hooks/UseSearch'
import Spinner from '../components/Spinner'
import Products from '../components/Products'
import Error from '../components/Error'
import { SEARCH_TYPE_SORT, SEARCH_TYPE_COUNT, SEARCH_TYPE_PAGE } from '../utils/constants'

import styles from './styles.scss'

const App = () => {
  const [searchConfig, setSearchConfig] = useState({ page: 1, page_size: 10, sort: 'popularity', resetPrevPageCount: false }) 
  const { loading, error, products, showMore, prevItemCount } = UseSearch(searchConfig.page, searchConfig.page_size, searchConfig.sort, searchConfig.resetPrevPageCount)
  console.log('prevItemCount = ', prevItemCount)
  const setSearchParam = (obj, type) => setSearchConfig((prevConfig) => {
    if(type == SEARCH_TYPE_COUNT) {
      return { ...prevConfig, page_size: obj.value, resetPrevPageCount: true }
    } 
    if (type == SEARCH_TYPE_SORT) {
      return { ...prevConfig, sort: obj.value, resetPrevPageCount: true }
    }
    if (type == SEARCH_TYPE_PAGE) {
      return { ...prevConfig, page: obj.value, resetPrevPageCount: true }
    }
  })
  
  const loadMoreProduct = () => {
    setSearchConfig(prevConfig => ({ ...prevConfig, page_size: searchConfig.page_size + 10, resetPrevPageCount: false }))
  }

  return <div id='ti-fed-challange'>
    <DisplayController handleChange={setSearchParam} pageCount={products.pageCount} />
    { products && <Products prevItemCount={prevItemCount} products={products} showMore={showMore} loading={loading} loadMoreCallback={loadMoreProduct} /> }
    { loading && <Spinner /> }
    { error && <Error /> }
    { showMore && <button className='show-more-btn' onClick={loadMoreProduct}>Show More</button> }
  </div>
}

export default App