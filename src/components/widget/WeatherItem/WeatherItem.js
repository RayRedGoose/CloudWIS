import React from 'react'
import './WeatherItem.scss'

const WeatherItem = (props) => {
  return (
    <section className={`weather-item weather-item__${props.itemType}`}>
      <p className={`header-${props.blockType}`}>{ props.weekDay }</p>
      <p className={ "number " + props.typeAbbr }> { props.number }</p>
      <p>{ props.itemType }</p>
    </section>
  )
}

export default WeatherItem
