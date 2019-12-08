import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('App', () => {
  let app

  beforeEach(() => {
    app = shallow(<App />)
  })

  it('should match the snapshot with no data fetched', () => {
    expect(app).toMatchSnapshot()
  })

  it('should match the snapshot with all data fetched', () => {
    app.setState({ sys: {
      isLoaded: true
    }})

    expect(app).toMatchSnapshot()
  })

  describe('change city method', () => {
    it('should update current city when changeCity is called', () => {
      // Expectation
      expect(app.state('data').currentCity).toEqual('Denver')

      // Execution
      app.instance().changeCity('Phoenix')

      // Expectation after
      expect(app.state('data').currentCity).toEqual('Phoenix')
    })

    it('should add new city to search history when changeCity is called', () => {
      const cities = [ 'Denver', 'Phoenix','Houston' ]
      // Expectation
      expect(app.state('data').searchHistory).toEqual(cities)

      // Execution
      app.instance().changeCity('Boise')

      // Expectation after
      expect(app.state('data').searchHistory).toEqual([
        ...cities,
        'Boise'
      ])
    })

    it('should keep search history the same if new city is in history already when changeCity is called', () => {
      const cities = [ 'Denver', 'Phoenix','Houston' ]
      // Expectation
      expect(app.state('data').searchHistory).toEqual(cities)

      // Execution
      app.instance().changeCity('Phoenix')

      // Expectation after
      expect(app.state('data').searchHistory).toEqual(cities)
    })

  })

  describe('setDayWeatherInfo method', () => {
    let mockData


    beforeEach(() => {
      mockData = {
        weather: [{main: 'Snow'}],
        main: {temp: 300, humidity: 87},
        wind: {speed: 1},
        visibility: 16093.44
      }
    })

    it('should add weather description when setDayWeatherInfo is called', () => {
      // Expectation
      expect(app.state('data').weatherData.today)
        .toEqual(null)

      // Execution
      app.instance().setDayWeatherInfo(mockData)

      // Expectation after
      expect(app.state('data').weatherData.today.desc)
        .toEqual('snow')
    })

    it('should add temperature when setDayWeatherInfo is called', () => {
      // Expectation
      expect(app.state('data').weatherData.today)
        .toEqual(null)

      // Execution
      app.instance().setDayWeatherInfo(mockData)

      // Expectation after
      expect(app.state('data').weatherData.today.temp)
        .toEqual(80)
    })

    it('should add wind speed when setDayWeatherInfo is called', () => {
      // Expectation
      expect(app.state('data').weatherData.today)
        .toEqual(null)

      // Execution
      app.instance().setDayWeatherInfo(mockData)

      // Expectation after
      expect(app.state('data').weatherData.today.wind)
        .toEqual(2)
    })

    it('should add humidity when setDayWeatherInfo is called', () => {
      // Expectation
      expect(app.state('data').weatherData.today)
        .toEqual(null)

      // Execution
      app.instance().setDayWeatherInfo(mockData)

      // Expectation after
      expect(app.state('data').weatherData.today.humidity)
        .toEqual(87)
    })

    it('should add visibility when setDayWeatherInfo is called', () => {
      // Expectation
      expect(app.state('data').weatherData.today)
        .toEqual(null)

      // Execution
      app.instance().setDayWeatherInfo(mockData)

      // Expectation after
      expect(app.state('data').weatherData.today.visibility)
        .toEqual(10)
    })
  })

  describe('setWeekWeatherInfo method', () => {
    let mockData

    beforeEach(() => {
      mockData = {
        list: [{
          dt_txt: '2019-12-02 15:00',
          main: {temp: 300},
          weather: [{main: 'Snow'}]
        }, {
          'dt_txt': '2019-12-03 15:00',
          main: {temp: 270},
          weather: [{main: 'Rain'}]
        }]
      }
    })

    it('should add short week weather info when setWeekWeatherInfo is called', () => {
      // Expectation
      expect(app.state('data').weatherData.week)
        .toEqual(null)

      // Execution
      app.instance().setWeekWeatherInfo(mockData)

      // Expectation after
      expect(app.state('data').weatherData.week)
        .toEqual({
          'Dec,02': '80.33-snow',
          'Dec,03': '26.33-rain'
        })
    })
  })

  it('should update loaded status when all data was fetched is called', () => {
    // Expectation
    expect(app.state('sys').isLoaded).toEqual(false)

    // Execution
    app.instance().setLoaded(true)

    // Expectation after
    expect(app.state('sys').isLoaded).toEqual(true)
  })

  it('should add error information when setError is called', () => {
    // Setup
    const error = { message: 'There is an error' }

    // Expectation
    expect(app.state('sys').error).toEqual(null)

    // Execution
    app.instance().setError(error)

    // Expectation after
    expect(app.state('sys').error).toEqual('There is an error')
  })

})
