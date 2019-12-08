import React from 'react'
import { shallow } from 'enzyme'
import Board from './Board'

it('should match the snapshot with all data passed in correctly', () => {
  const mockProps = {
    currentCity: 'Denver',
    weatherData: {
      today: {desc: 'today weather'},
      week: {desc: 'week weather'}
    },
    searchHistory: ['Denver', 'Phoenix'],
    changeCity: jest.fn(),
    fetchWeatherData: jest.fn()
  }

  const board = shallow(<Board {...mockProps} />)
  expect(board).toMatchSnapshot()
})
