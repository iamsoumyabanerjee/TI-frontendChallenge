import React from 'react'
import renderer from 'react-test-renderer'
import Error from '.'

describe('#Error', () => {
  it('should render correctly with default text', () => {
    const tree = renderer
      .create(<Error />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with supplied text', () => {
    const props = { content: 'Some content' }
    const tree = renderer
      .create(<Error { ... props} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})