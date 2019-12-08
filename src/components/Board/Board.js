import React from 'react'
import './Board.scss'
import Menu from '../menu/Menu/Menu'
import WeatherWidget from '../widget/WeatherWidget/WeatherWidget'

const Board = (props) => {
  return (
    <div className="board-wrapper">
      <Menu
        changeCity={props.changeCity}
        searchHistory={props.searchHistory}
        fetchWeatherData={props.fetchWeatherData}/>
      <WeatherWidget
        searchCity={props.currentCity}
        weatherCurrentData={props.weatherData.today}
        weatherDaysData={props.weatherData.week} />
    </div>
  )
}

export default Board
