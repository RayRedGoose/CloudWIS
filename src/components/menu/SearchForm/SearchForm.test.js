import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  let form, mockProps, mockEvent
  const changeCity = jest.fn()
  const fetchWeatherData = jest.fn()
  const toggleActiveState = jest.fn()

  beforeEach(() => {
    mockProps = {
      changeCity: changeCity,
      fetchWeatherData: fetchWeatherData,
      toggleActiveState: toggleActiveState
    }

    form = shallow(<SearchForm { ...mockProps }/>);
  })

  it('should match the snapshot if it\'s not clicked', () => {
    expect(form).toMatchSnapshot();
  })

  it('should update sought-for city when input change', () => {

    expect(form.state('searchCity')).toEqual('');

    form.find('input').simulate(
      'change',
      {target: {value: 'Atlanta'}}
    );

    expect(form.state('searchCity')).toEqual('Atlanta');
  });

  it('should call handleChange when input is changed', () => {
    const spy = jest.spyOn(form.instance(), 'handleChange').mockImplementation(() => {});
    form.instance().forceUpdate();

    form.find('input').simulate(
      'change',
      { target: { value: 'Atlanta'}
    });

    expect(spy).toHaveBeenCalled();
  });

  it('should clear city state when clear button was pushed', () => {
    form.setState({searchCity: 'Atlanta'})

    expect(form.state('searchCity')).toEqual('Atlanta');

    form.find('#clear-button').simulate(
      'click',
      {preventDefault: jest.fn()}
    );

    expect(form.state('searchCity')).toEqual('');
  });

  it('should call submitSearch when search was activated by enter', () => {
    const spy = jest.spyOn(form.instance(), 'submitSearch').mockImplementation(() => {});
    form.instance().forceUpdate();

    mockEvent = {
      target: document.querySelector('input'),
      key: 'Enter'
    }

    form.find('input').simulate('keypress', mockEvent);

    expect(spy).toHaveBeenCalled();
  });

  describe('submitSearch method', () => {
    beforeEach(() => {
      mockEvent = {
        preventDefault: jest.fn()
      }
    });

    it('should call changeCity prop when search is submitted', () => {
      form.find('#submit-button').simulate('click', mockEvent);

      expect(changeCity).toHaveBeenCalled();
    });

    it('should call toggleActiveState prop when search is submitted', () => {
      form.find('#submit-button').simulate('click', mockEvent);

      expect(toggleActiveState).toHaveBeenCalled();
    });

    it('should call fetchWeatherData prop when search is submitted', () => {
      form.find('#submit-button').simulate('click', mockEvent);

      expect(fetchWeatherData).toHaveBeenCalled();
    })

    it('should call clearInputs when search was submitted', () => {
      const spy = jest.spyOn(form.instance(), 'clearInputs').mockImplementation(() => {});
      form.instance().forceUpdate();

      form.find('#submit-button').simulate('click', mockEvent);

      expect(spy).toHaveBeenCalled();
    })
  })
})
