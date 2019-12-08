import React from 'react'
import './SearchHistory.scss'
import HistoryItem from '../HistoryItem/HistoryItem'

const SearchHistory = (props) => {
  const searchHistoryItems = props.searchHistory.map(item => {
    return (
      <HistoryItem
        changeCity={props.changeCity}
        fetchWeatherData={props.fetchWeatherData}
        toggleActiveState={props.toggleActiveState}
        cityName={item}
        key={item}/>
    )
  })

  return (
    <nav className="history">
      <h2>Search history</h2>
      <ul>
        {searchHistoryItems}
      </ul>
    </nav>
  )
}

export default SearchHistory
