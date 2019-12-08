import React, { Component } from 'react'
import './App.scss'
import utility from '../../_utility/utility'
import { getCurrentWeatherData, getWeekWeatherData } from '../../apiCalls/apiCalls'
import Board from '../Board/Board'
import LoadingImage from '../LoadingImage/LoadingImage'
import AppHeader from '../AppHeader/AppHeader'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: {
        currentCity: 'Denver',
        searchHistory: ['Denver', 'Phoenix', 'Houston'],
        weatherData: {
          today: null,
          week: null
        }
      },
      sys: {
        error: null,
        isLoaded: false
      }
    }
  }

  componentDidMount = () => {
    this.getDataFromLocalStorage()
      .then((currentCity) => this.fetchWeatherData(currentCity))
  }

  async getDataFromLocalStorage() {
    const currentCity = (localStorage.length)
      ? localStorage.getItem('currentCity')
      : 'Denver'
    const searchHistory = (localStorage.length)
      ? localStorage.getItem('searchHistory').split(',')
      : ['Denver', 'Phoenix', 'Houston']

    this.setState({
      ...this.state,
      data: {
        currentCity: currentCity,
        searchHistory: searchHistory,
        weatherData: {
          today: null,
          week: null
        }
      }
    })
    return currentCity
  }

  fetchWeatherData = (city) => {
    Promise.all([
      getCurrentWeatherData(city)
        .then(data => this.setDayWeatherInfo(data))
        .catch(error => this.setError(error)),

      getWeekWeatherData(city)
        .then(data => this.setWeekWeatherInfo(data))
    ]).then(() => this.setLoaded(true))
      .catch(error => this.setError(error))
  }

  setDayWeatherInfo = (data) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        weatherData: {
          ...this.state.data.weatherData,
          today: utility.updateTodayData(data),
        }
      }
    })
  }

  setWeekWeatherInfo = (data) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        weatherData: {
          ...this.state.data.weatherData,
          week: utility.updateDaysData(data)
        }
      }
    })
  }

  setError = (error) => {
    this.setState({
      data: {...this.state.data},
      sys: {
        ...this.state.sys,
        error: error.message
      }
    })
  }

  setLoaded = (state) => {
    this.setState({
      data: {...this.state.data},
      sys: {
        ...this.state.sys,
        isLoaded: state
      }
    })
  }

  changeCity = (city) => {
    const cities =
      (!this.state.data.searchHistory.includes(city))
        ? [...this.state.data.searchHistory, city]
        : [...this.state.data.searchHistory]

    this.setState({
      data: {
        currentCity: city,
        searchHistory: cities,
        weatherData: {
          today: null,
          week: null
        }
      },
      sys: {
        error: null,
        isLoaded: false
      }
    })

    localStorage.setItem('currentCity', city)
    localStorage.setItem('searchHistory', cities)
  }

  render() {
    return (
      <main className="app">
        <AppHeader />
        {
          (this.state.sys.isLoaded)
            ? <Board
              {...this.state.data}
              changeCity={this.changeCity}
              fetchWeatherData={this.fetchWeatherData}/>
            : <LoadingImage />
        }
      </main>
    )

  }
}

export default App
