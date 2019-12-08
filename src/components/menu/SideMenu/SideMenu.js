import React from 'react'
import './SideMenu.scss'
import BackIcon from '../_icons/BackIcon/BackIcon'
import SearchForm from '../SearchForm/SearchForm'
import SearchHistory from '../SearchHistory/SearchHistory'

const SideMenu = (props) => {
  return (
    <main>
      <section className="menu-panel">
        <BackIcon toggleActiveState={props.toggleActiveState} />
        <SearchForm
          changeCity={props.changeCity}
          fetchWeatherData={props.fetchWeatherData}
          toggleActiveState={props.toggleActiveState} />
        <SearchHistory {...props} />
      </section>
      <section className="darkscreen"></section>
    </main>
  )
}

export default SideMenu
