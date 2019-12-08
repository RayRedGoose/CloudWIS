import React from 'react'
import { shallow } from 'enzyme'
import Menu from './Menu'

describe('Menu', () => {
  let menu, mockProps

  beforeEach(() => {
    mockProps = {
      searchHistory: ['Denver', 'Phoenix'],
      changeCity: jest.fn(),
      fetchWeatherData: jest.fn()
    }

    menu = shallow(<Menu {...mockProps} />);
  })

  it('should match the snapshot if it\'s not clicked', () => {
    expect(menu).toMatchSnapshot();
  })

  it('should match the snapshot if it\'s clicked', () => {
    menu.setState({ isActive: true });

    expect(menu).toMatchSnapshot();
  })

  it('should change inactive state to active when toggleActiveState is called', () => {
    expect(menu.state('isActive')).toEqual(false);

    menu.instance().toggleActiveState();

    expect(menu.state('isActive')).toEqual(true);
  })

  it('should change active state to inactive when toggleActiveState is called', () => {
    menu.setState({ isActive: true });

    expect(menu.state('isActive')).toEqual(true);

    menu.instance().toggleActiveState();

    expect(menu.state('isActive')).toEqual(false);
  })

})
