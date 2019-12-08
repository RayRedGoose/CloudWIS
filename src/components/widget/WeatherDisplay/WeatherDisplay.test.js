import React from 'react';
import { shallow } from 'enzyme';
import WeatherDisplay from './WeatherDisplay';

it('should match the snapshot with all data passed in correctly', () => {
  const mockProps = {
    weatherCurrentData: {desc: 'current weather info'},
    weatherDaysData: {desc: 'five days weather info'},
    searchCity: 'Denver'
  }

  const block = shallow(
    <WeatherDisplay {...mockProps} />
  );

  expect(block).toMatchSnapshot();
});
