import React from 'react';
import { shallow } from 'enzyme';
import WeatherImage from './WeatherImage';

it('should match the snapshot with all data passed in correctly', () => {
  const block = shallow(
    <WeatherImage type={'clouds'} />
  );

  expect(block).toMatchSnapshot();
});

it('should match the snapshot with rain data passed', () => {
  const block = shallow(
    <WeatherImage type={'rain'} />
  );

  expect(block).toMatchSnapshot();
});

it('should match the snapshot with snow data passed', () => {
  const block = shallow(
    <WeatherImage type={'snow'} />
  );

  expect(block).toMatchSnapshot();
});
