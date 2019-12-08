import React from 'react'
import './WeatherImage.scss'
import RainyBackground from '../backgrounds/rainy/RainyBackground/RainyBackground'
import SnowyBackground from '../backgrounds/snowy/SnowyBackground/SnowyBackground'

const WeatherImage = ({type}) => {
  const findBackground = (type) => {
    if (type === 'rain') {
      return (<RainyBackground />)
    }

    if (type === 'snow') {
      return (<SnowyBackground />)
    }

    return (<div></div>)
  }

  return (
    <section className="weather-image">
      { findBackground(type) }
    </section>
  )
}

export default WeatherImage
