import React from 'react'
import './WeatherRow.scss'
import WeatherItem from '../WeatherItem/WeatherItem'

const WeatherRow = ({ weatherData, title, type }) => {
  const keys = Object.keys(weatherData).filter(key => key !== 'desc')
  const currentItems = keys.map((key) => {
    const itemDesc = (key === 'temp') ? weatherData['desc'] : key
    return (
      <WeatherItem
        key={key}
        weekDay=''
        typeAbbr={key}
        itemType={itemDesc}
        blockType={type}
        number={parseInt(weatherData[key])} />
    )
  })

  const daysItems = Object.keys(weatherData).map((key) => {
    const weatherInfo = weatherData[key].toString().split('-')
    return (
      <WeatherItem
        key={key}
        weekDay={key}
        typeAbbr='temp'
        itemType={weatherInfo[1]}
        blockType={type}
        number={parseInt(weatherInfo[0])} />
    )
  })

  return (
    <section className="weather-row">
      <h2>{title}</h2>
      <main>
        { (type === 'day') ? currentItems : daysItems }
      </main>
    </section>
  )
}

export default WeatherRow
