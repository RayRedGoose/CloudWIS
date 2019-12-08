import React from 'react'
import './WeatherDisplay.scss'
import WeatherRow from '../WeatherRow/WeatherRow'

const WeatherDisplay = (props) => {
  return (
    <section className="weather-display">
      <h1 name={props.searchCity}>{props.searchCity}</h1>
      <WeatherRow
        weatherData={props.weatherCurrentData}
        title='Today'
        type='day'
        key='day'/>
      <WeatherRow
        weatherData={props.weatherDaysData}
        title='5 Day Forecast'
        type='fiveDays'
        key='fiveDays'/>
    </section>
  )
}

export default WeatherDisplay
