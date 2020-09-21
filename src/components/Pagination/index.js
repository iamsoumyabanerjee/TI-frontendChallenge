import React from 'react'
import { SEARCH_TYPE_PAGE } from '../../utils/constants'

import './styles.scss'
const Pagination = ({ currentPage, pageCount, onClick }) => {
  const NEXT = 'NEXT'
  const PREV = 'PREV'

  const onClickHandler = type => {
    let updatedPage = parseInt(currentPage.value)
    if (type == NEXT) {
      updatedPage = updatedPage + 1
    } else {
      updatedPage = updatedPage - 1
    }
    onClick({ value: updatedPage }, SEARCH_TYPE_PAGE)
  }

  return (
    <div className='pagination'>
      <button disabled={currentPage.value < 2} onClick={() => onClickHandler(PREV)}>Prev</button>
      <span className='current-page'>{currentPage.value}</span>
      <button disabled={currentPage.value == pageCount} onClick={() => onClickHandler(NEXT)}>Next</button>
    </div>
  )
}

export default Pagination