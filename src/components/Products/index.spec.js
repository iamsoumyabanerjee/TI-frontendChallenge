import React from 'react'
import renderer from 'react-test-renderer'
import Products from '.'

describe('#Producs', () => {
  const props = {
    products: {
      data: [{
        _embedded: { 
          images: 'some image url', 
          brand: 'abcd' 
        }, 
        name: 'Name', 
        price: 'Some value', 
        final_price: 'Some value', 
        link: 'link value', 
        ribbon: 'value' 
      }]
    }
  }
  it('should render correctly', () => {
    const tree = renderer
      .create(<Products { ...props } />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})