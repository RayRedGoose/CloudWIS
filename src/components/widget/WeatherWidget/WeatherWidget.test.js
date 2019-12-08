import React from 'react';
import { shallow } from 'enzyme';
import WeatherWidget from './WeatherWidget';

it('should match the snapshot with all data passed in correctly', () => {
  const mockProps = {
    weatherCurrentData: {desc: 'current weather info'},
    weatherDaysData: {desc: 'five days weather info'},
    searchCity: 'Denver'
  }

  const widget = shallow(
    <WeatherWidget {...mockProps} />
  );

  expect(widget).toMatchSnapshot();
});
