import React from 'react';
import { shallow } from 'enzyme';
import BackIcon from './BackIcon';

describe('BackIcon', () => {
  let icon
  const toggleActiveState = jest.fn()

  beforeEach(() => {
    icon = shallow(
      <BackIcon toggleActiveState={toggleActiveState}/>
    )
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(icon).toMatchSnapshot();
  })

  it('should call the toggleActiveState prop when clicked', () => {
    icon.simulate('click');

    expect(toggleActiveState).toHaveBeenCalled();
  })

  it('should call the toggleActiveState when enter is key', () => {
    icon.simulate('keypress', {key: 'Enter'});

    expect(toggleActiveState).toHaveBeenCalled();
  })
})
