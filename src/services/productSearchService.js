import Axios from 'axios'
import baseConfig from '../../config'

const { productSearchUrl } = baseConfig()

export const ProductSearchService = (param) => {
  return Axios({
    method: 'GET',
    url: productSearchUrl,
    params: { gender: 'female', ...param }
  })
}