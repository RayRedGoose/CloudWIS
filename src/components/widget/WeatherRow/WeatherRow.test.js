import React from 'react';
import { shallow } from 'enzyme';
import WeatherRow from './WeatherRow';

it('should match the snapshot if it has day type', () => {
  const mockProps = {
    weatherData: {temp: 15},
    title: 'Today',
    type: 'day'
  }

  const row = shallow(
    <WeatherRow {...mockProps} />
  );

  expect(row).toMatchSnapshot();
});

it('should match the snapshot if it has fiveDays type', () => {
  const mockProps = {
    weatherData: {'Dec,01': 15, 'Dec,02': 25},
    title: '5-Days',
    type: 'fiveDays'
  }

  const row = shallow(
    <WeatherRow {...mockProps} />
  );

  expect(row).toMatchSnapshot();
});
