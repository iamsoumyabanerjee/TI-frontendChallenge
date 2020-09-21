import React from 'react'
import renderer from 'react-test-renderer'
import Product from '.'

describe('#Product', () => {
  const props = {
    index: 0,
    product: { 
      _embedded: { 
        images: 'some image url', 
        brand: 'abcd' 
      }, 
      name: 'Name', 
      price: 'Some value', 
      final_price: 'Some value', 
      link: 'link value', 
      ribbon: 'value' 
    }
  }

  it('should render correctly', () => {
    const tree = renderer
      .create(<Product { ...props } />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})