import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
import Band from '../components/Band'

class BandsContainer extends Component {
  renderBands = () => {
    return this.props.bands.map((band, id) => <li key={id}> {band.name} </li>)
  }

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul> {this.renderBands()} </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
