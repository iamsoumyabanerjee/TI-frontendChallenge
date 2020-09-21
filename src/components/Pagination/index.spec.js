import React from 'react'
import renderer from 'react-test-renderer'
import Pagination from '.'

describe('#Error', () => {
  it('should render correctly', () => {
    const props = {
      currentPage: { value: 1 }, pageCount: 10, onClick: jest.fn()
    }
    const tree = renderer
      .create(<Pagination { ...props } />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})