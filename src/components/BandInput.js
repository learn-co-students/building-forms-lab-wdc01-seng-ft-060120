// Add BandInput component
import React, { Component } from 'react'

const defaultState = {
  name: "",
}

class BandInput extends Component {

  state = defaultState

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    let band = {band: this.state.name}
    this.props.addBand(band)
    this.setState({
      name: "",
    })
  }



  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange}></input>
          <input type="submit" value={"Add Band"}/>
        </form>
      </div>
    )
  }
}

export default BandInput
