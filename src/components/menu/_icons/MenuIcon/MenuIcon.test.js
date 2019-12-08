import React from 'react';
import { shallow } from 'enzyme';
import MenuIcon from './MenuIcon';

describe('MenuIcon', () => {
  let icon
  const toggleActiveState = jest.fn()

  beforeEach(() => {
    icon = shallow(
      <MenuIcon toggleActiveState={toggleActiveState} />
    )
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(icon).toMatchSnapshot();
  });

  it('should call the toggleActiveState prop when clicked', () => {
    icon.simulate('click');

    expect(toggleActiveState).toHaveBeenCalled();
  });

  it('should call the toggleActiveState when enter was pressed', () => {
    icon.simulate('keypress', {key: 'Enter'});

    expect(toggleActiveState).toHaveBeenCalled();
  });

})
