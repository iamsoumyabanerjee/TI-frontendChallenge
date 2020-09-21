import React, { useState } from 'react'
import Select from 'react-select'

import { SEARCH_TYPE_SORT, SEARCH_TYPE_COUNT, SEARCH_TYPE_PAGE } from '../../utils/constants'
import Pagination from '../Pagination'
import styles from './styles.scss'

const DisplayController = ({ handleChange, pageCount = null }) => {
  const ItemsPerPage = [{
    value: 10, label: '10 per page'
  }, {
    value: 25, label: '25 per page'
  }, {
    value: 40, label: '40 per page'
  }]

  const sortBy = [{
    value: 'popularity', label: 'Popularity'
  }, {
    value: 'new', label: 'New Arrivals'
  }, {
    value: 'price_high', label: 'Price High to Low'
  }, {
    value: 'price_low', label: 'Price Low to High'
  }]
  const [currentPage, setCurrentPage] = useState({ value: 1 })
  const onChangeHandler = (value, type) => {
    if (type === SEARCH_TYPE_PAGE) {
      setCurrentPage(prevValue => ({ ...prevValue, value: value.value }))
    }
    handleChange(value, type)
  }

  return (
    <div className='display-controller'>
      <div className='wrapper'>
        <Select className='item-count' onChange={(selectedValue) => onChangeHandler(selectedValue, SEARCH_TYPE_COUNT)} options={ItemsPerPage} defaultValue={ItemsPerPage[0]} />
        <Select className='sort-by' onChange={(selectedValue) => onChangeHandler(selectedValue, SEARCH_TYPE_SORT)} options={sortBy} defaultValue={sortBy[0]} />
        { pageCount && <Pagination onClick={onChangeHandler} currentPage={currentPage} pageCount={pageCount} />  }
      </div>
    </div>
  )
}

export default DisplayController

