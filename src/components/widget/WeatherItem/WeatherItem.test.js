import React from 'react';
import { shallow } from 'enzyme';
import WeatherItem from './WeatherItem';

it('should match the snapshot with all data passed in correctly', () => {
  const mockProps = {
    key: 1,
    weekDay: '',
    typeAbbr: 'temp',
    itemType: 'Clouds',
    blockType: 'day',
    number: 15
  }

  const item = shallow(
    <WeatherItem {...mockProps} />
  );

  expect(item).toMatchSnapshot();
});
