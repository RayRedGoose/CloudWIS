import React, { Component } from 'react'
import './SearchForm.scss'

class SearchForm extends Component {
  constructor(props) {
    super();
    this.state = {
      searchCity: ''
    }
  }

  handleChange = event => {
    this.setState({ searchCity: event.target.value });
  }

  keyPressed = event => {
    if (event.key === "Enter") {
      this.submitSearch(event)
    }
  }

  clearInputs = event => {
    event.preventDefault()
    this.setState({ searchCity: '' });
  }

  submitSearch = event => {
    event.preventDefault()
    this.props.changeCity(this.state.searchCity)
    this.props.toggleActiveState()
    this.props.fetchWeatherData(this.state.searchCity)
    this.clearInputs(event)
  }

  render() {
    return (
      <form className="city-search__form">
        <label htmlFor="city-search__input">Find city</label>
        <input
          type="text"
          id="city-search__input"
          placeholder="Enter city here"
          onChange={this.handleChange}
          value={this.state.searchCity}
          onKeyPress={this.keyPressed}/>
        <div className="button-wrapper">
          <button
            id="clear-button"
            onClick={this.clearInputs}>Clear</button>
          <button
            id="submit-button"
            onClick={this.submitSearch}>Search</button>
        </div>
      </form>
    )
  }
}

export default SearchForm
