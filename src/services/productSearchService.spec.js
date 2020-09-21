import Axios from 'axios'
import '@babel/polyfill'

import { ProductSearchService } from './productSearchService'

jest.mock('axios')

const URL = 'https://somedummyurl.com' 

describe('#ProductSearchService', () => {
  it('should fetch the details successfully', async () => {
    const successObj = { data: {} }
    Axios.mockImplementation(() => Promise.resolve(successObj))
    
    await expect(ProductSearchService(URL)).resolves.toBe(successObj)
  })

  it('should fail to fetch the data', async () => {
    const errorMessage = 'Some error messages'
    Axios.mockImplementation(() => Promise.reject(errorMessage))

    await expect(ProductSearchService(URL)).rejects.toBe(errorMessage)
  })
})

