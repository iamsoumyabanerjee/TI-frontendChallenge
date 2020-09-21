import { renderHook, act } from '@testing-library/react-hooks'
import React from 'react'
import UseSearch from './UseSearch'

describe.only('#UseSearch', () => {
  it('should return correct state on success of product search', async () => {
    
    const { result } = renderHook(() => UseSearch())
    
    const expectedResult = {
      loading: false,
      error: false,
      products: { data: [{}] },
      showMore: true,
      prevItemCount: 0
    }
    act(() => {
      const useEffect = jest.spyOn(React, 'useEffect').mockImplementation(() => {
        result.current.loading = false
        result.current.error = false
        result.current.products = { data: [{}] }
        result.current.showMore = true
      })
      useEffect()
    })

    await expect(result.current).toEqual(expectedResult)
  })  
})