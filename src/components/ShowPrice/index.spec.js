import React from 'react'
import renderer from 'react-test-renderer'
import ShowPrice from '.'

describe('ShowPrice', () => {
  it('should render correctly when actual price and final price are same', () => {
    const props = {
      price: 100,
      finalPrice: 100
    }
    const tree = renderer
      .create(<ShowPrice { ...props } />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
  it('should render correctly when actual price and final price are not same', () => {
    const props = {
      price: 100,
      finalPrice: 80
    }
    const tree = renderer
      .create(<ShowPrice { ...props }/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})