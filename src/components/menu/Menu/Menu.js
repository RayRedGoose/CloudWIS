import React, { Component } from 'react'
import './Menu.scss'
import MenuIcon from '../_icons/MenuIcon/MenuIcon'
import SideMenu from '../SideMenu/SideMenu'

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: false
    }
  }

  toggleActiveState = () => {
    this.setState({ isActive: !this.state.isActive })
  }

  render() {
    return (
      <header className="side-menu">
        {
          (this.state.isActive)
            ? <SideMenu
              {...this.props}
              toggleActiveState={this.toggleActiveState}/>
            : <MenuIcon
              toggleActiveState={this.toggleActiveState} />
        }
      </header>
    )
  }
}

export default Menu
