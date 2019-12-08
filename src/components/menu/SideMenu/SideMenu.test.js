import React from 'react';
import { shallow } from 'enzyme';
import SideMenu from './SideMenu';

it('should match the snapshot with all data passed in correctly', () => {
  const mockProps = {
    changeCity: jest.fn(),
    searchHistory: ['Denver', 'Phoenix'],
    fetchWeatherData: jest.fn(),
    toggleActiveState: jest.fn()
  }

  const menu = shallow(<SideMenu { ...mockProps } />);

  expect(menu).toMatchSnapshot();
});
