import React from 'react';
import { shallow } from 'enzyme';
import HistoryItem from './HistoryItem';

describe("HistoryItem", () => {
  let item, mockProps
  const changeCity = jest.fn()
  const fetchWeatherData = jest.fn()
  const toggleActiveState = jest.fn()

  beforeEach(() => {
    mockProps = {
      changeCity: changeCity,
      fetchWeatherData: fetchWeatherData,
      toggleActiveState: toggleActiveState,
      cityName: 'Denver',
      key: 'Denver'
    }

    item = shallow(
      <HistoryItem {...mockProps}/>
    )
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(item).toMatchSnapshot();
  })

  describe("changeCityByClick", () => {
    let mockEvent

    beforeEach(() => {
      mockEvent = {
        target: {
          getAttribute: jest.fn()
        }
      }
    });

    it('should call changeCity prop when item was pushed', () => {
      item.simulate('click', mockEvent);

      expect(changeCity).toHaveBeenCalled();
    })

    it('should call toggleActiveState prop when item was pushed', () => {
      item.simulate('click', mockEvent);

      expect(toggleActiveState).toHaveBeenCalled();
    })

    it('should call fetchWeatherData prop when item was pushed', () => {
      item.simulate('click', mockEvent);

      expect(fetchWeatherData).toHaveBeenCalled();
    })
  });
});
