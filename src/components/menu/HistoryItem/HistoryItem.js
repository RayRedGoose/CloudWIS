import React from 'react'
import './HistoryItem.scss'

const HistoryItem = (props) => {
  const changeCityByClick = (event) => {
    const searchCity = event.target.getAttribute('name')
    props.changeCity(searchCity)
    props.toggleActiveState()
    props.fetchWeatherData(searchCity)
  }

  const keyPressed = (event) => {
    if (event.key === "Enter") {
      changeCityByClick(event)
    }
  }

  return (
    <li
      tabIndex="0"
      role="button"
      className="history-item"
      name={props.cityName}
      onClick={changeCityByClick}
      onKeyPress={keyPressed}>{props.cityName}</li>
  )
}

export default HistoryItem
