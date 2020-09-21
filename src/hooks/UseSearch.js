import { useEffect, useState } from 'react'

import { ProductSearchService } from '../services/productSearchService'

export default function UseSearch(page = 1, page_size = 10, sort = 'popularity', resetPrevPageCount) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [products , setProducts] = useState({})
  const [showMore, setShowMore] = useState(false)
  const [prevItemCount, setPrevItemCount] = useState(0)

  useEffect(() => {
    (async () => {
      const param = { page, page_size, sort }
      try {
        const { data } = await ProductSearchService(param)
        !resetPrevPageCount ? setPrevItemCount(products.data ? products.data.length : 0) : setPrevItemCount(0)
        setProducts(prevProducts => ({ ...prevProducts, pageCount: data.page_count, data: data._embedded.product }))
        setShowMore(data.page_count > 0)
        setLoading(false)
      } catch(err) {
        setError(err)
        setLoading(false)
      }
    })()
  }, [page, page_size, sort])
  products.data && console.log(products.data.length)
  return { loading, error, products, showMore, prevItemCount }
}