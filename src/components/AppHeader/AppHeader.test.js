import React from 'react'
import { shallow } from 'enzyme'
import AppHeader from './AppHeader'

it('should match the snapshot with all data passed in correctly', () => {
  const header = shallow(<AppHeader />)
  expect(header).toMatchSnapshot()
})
