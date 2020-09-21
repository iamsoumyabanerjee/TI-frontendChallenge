import React from 'react'
import renderer from 'react-test-renderer'
import Spinner from '.'

describe('Spinner', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<Spinner />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})