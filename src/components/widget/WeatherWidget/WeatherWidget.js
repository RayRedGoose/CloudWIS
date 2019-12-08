import React from 'react'
import './WeatherWidget.scss'
import WeatherImage from '../WeatherImage/WeatherImage'
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay'

const WeatherWidget = (props) => {
  return (
    <section className="weather-widget">
      <WeatherImage type={props.weatherCurrentData.desc}/>
      <WeatherDisplay {...props} />
    </section>
  )
}

export default WeatherWidget
