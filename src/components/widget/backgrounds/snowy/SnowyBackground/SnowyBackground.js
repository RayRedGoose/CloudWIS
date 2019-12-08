import React from 'react'
import './SnowyBackground.scss'

const SnowyBackground = () => {
  const repeatSnow = () => {
    let snows = new Array(300).fill(undefined)

    return snows.map((snow, index) => {
      return <div className="snow"></div>
    })
  }

  return (
    <main className="snowy">
      <div className="snow-row">
        { repeatSnow() }
      </div>
    </main>
  )
}

export default SnowyBackground;
