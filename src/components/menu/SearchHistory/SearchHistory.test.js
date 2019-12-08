import React from 'react'
import { shallow } from 'enzyme'
import SearchHistory from './SearchHistory'

it('should match the snapshot with all data passed in correctly', () => {
  const mockProps = {
    changeCity: jest.fn(),
    searchHistory: ['Denver', 'Phoenix'],
    fetchWeatherData: jest.fn(),
    toggleActiveState: jest.fn()
  }

  const history = shallow(
    <SearchHistory {...mockProps} />
  )

  expect(history).toMatchSnapshot()
})
