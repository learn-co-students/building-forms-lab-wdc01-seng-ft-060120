// Add BandInput component
import React, { Component } from 'react'


let defaultState = { name: '' }

class BandInput extends Component {

  state = defaultState

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let band = {band: this.state.name}
    this.props.addBand(band)
    this.setState(defaultState)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add Band Name:</label>
          <input type="text" name="name" 
          value={this.state.name} onChange={this.handleChange}></input>
          <input type="submit" value={"Add Band"}/>
        </form>
      </div>
    )
  }
}



export default BandInput
