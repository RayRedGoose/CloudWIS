import React from 'react'
import './MenuIcon.scss'

const MenuIcon = ({toggleActiveState}) => {
  const activateMenu = () => {
    toggleActiveState()
  }

  const keyPressed = (event) => {
    if (event.key === "Enter") {
      activateMenu()
    }
  }

  return (
    <svg
      tabIndex = '0'
      role="button"
      onClick={activateMenu}
      onKeyPress={keyPressed}
      x="0px" y="0px"
    	viewBox="0 0 951 951"
      className="menu-icon">
      <path d="M475.5,80.2c-218.3,0-395.3,177-395.3,395.3s177,395.3,395.3,395.3c218.3,0,395.3-177,395.3-395.3 C870.6,257.3,693.7,80.4,475.5,80.2z M475.5,818.1c-189.2,0-342.6-153.4-342.6-342.6s153.4-342.6,342.6-342.6 c189.2,0,342.6,153.4,342.6,342.6C817.9,664.6,664.6,817.9,475.5,818.1z"/>
    	<path d="M422.8,449.1h105.4v52.7H422.8V449.1z"/>
    	<path d="M554.6,449.1h52.7v52.7h-52.7V449.1z"/>
    	<path d="M343.7,449.1h52.7v52.7h-52.7V449.1z"/>
    </svg>
  )
}

export default MenuIcon
